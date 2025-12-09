import * as React from "react"
import { useNavigate } from "react-router-dom"
import { LabInputForm } from "@/components/lab/LabInputForm"
import { useToast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const AddInput: React.FC = () => {
  const navigate = useNavigate()
  const { showToast, ToastProvider } = useToast()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (data: {
    processorInventoryId?: string
    reportpath?: string
    description?: string
    isDone?: boolean
  }) => {
    setIsLoading(true)
    try {
      const result = await window.api.lab.addProcessorInput({
        processorInventoryId: data.processorInventoryId!,
        reportpath: data.reportpath,
        description: data.description,
        isDone: data.isDone || false,
      })

      if (result.logout) {
        showToast("Session expired. Please login again.", "error")
        setTimeout(() => navigate("/login", { replace: true }), 2000)
        return
      }

      if (result.error) {
        showToast(result.error, "error")
        return
      }

      if (result.data) {
        const inputId = result.data.id || 'N/A'
        showToast(`Processor input added successfully! ID: ${inputId}`, "success")
        setTimeout(() => {
          navigate("/lab/processor-inputs", { replace: true })
        }, 2000)
      }
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Failed to add processor input",
        "error"
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-2xl py-8 px-4">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/lab/processor-inputs")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to List
        </Button>
        <h1 className="text-3xl font-semibold tracking-tight">Add New Processor Input</h1>
        <p className="text-muted-foreground mt-2">
          Create a new lab processor input record linked to a processor inventory.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <LabInputForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>

      <ToastProvider />
    </div>
  )
}

export default AddInput

