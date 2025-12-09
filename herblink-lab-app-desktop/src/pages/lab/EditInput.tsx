import * as React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { LabInputForm } from "@/components/lab/LabInputForm"
import { useToast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2 } from "lucide-react"
import type { LabProcessorInput } from "@/components/lab/LabInputTable"

const EditInput: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { showToast, ToastProvider } = useToast()
  const [isLoading, setIsLoading] = React.useState(false)
  const [isFetching, setIsFetching] = React.useState(true)
  const [inputData, setInputData] = React.useState<LabProcessorInput | null>(null)

  React.useEffect(() => {
    const fetchInput = async () => {
      if (!id) {
        showToast("Invalid input ID", "error")
        navigate("/lab/processor-inputs", { replace: true })
        return
      }

      setIsFetching(true)
      try {
        const result = await window.api.lab.listProcessorInputs()

        if (result.logout) {
          showToast("Session expired. Please login again.", "error")
          setTimeout(() => navigate("/login", { replace: true }), 2000)
          return
        }

        if (result.error) {
          showToast(result.error, "error")
          navigate("/lab/processor-inputs", { replace: true })
          return
        }

        if (result.data) {
          // Ensure result.data is an array
          const dataArray = Array.isArray(result.data) ? result.data : []
          const input = dataArray.find((item) => item.id === id)
          if (input) {
            setInputData(input)
          } else {
            showToast("Input not found", "error")
            navigate("/lab/processor-inputs", { replace: true })
          }
        }
      } catch (error) {
        showToast(
          error instanceof Error ? error.message : "Failed to fetch input",
          "error"
        )
        navigate("/lab/processor-inputs", { replace: true })
      } finally {
        setIsFetching(false)
      }
    }

    fetchInput()
  }, [id, navigate, showToast])

  const handleSubmit = async (data: {
    processorInventoryId?: string
    reportpath?: string
    description?: string
    isDone?: boolean
  }) => {
    if (!id) return

    setIsLoading(true)
    try {
      const result = await window.api.lab.updateProcessorInput(id, {
        reportpath: data.reportpath,
        description: data.description,
        isDone: data.isDone,
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
        const inputId = result.data.id || id || 'N/A'
        showToast(`Processor input updated successfully! ID: ${inputId}`, "success")
        setTimeout(() => {
          navigate("/lab/processor-inputs", { replace: true })
        }, 2000)
      }
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Failed to update processor input",
        "error"
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (isFetching) {
    return (
      <div className="container mx-auto max-w-2xl py-8 px-4">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
        <ToastProvider />
      </div>
    )
  }

  if (!inputData) {
    return null
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
        <h1 className="text-3xl font-semibold tracking-tight">Edit Processor Input</h1>
        <p className="text-muted-foreground mt-2">
          Update the processor input details.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <div className="mb-4 p-3 rounded-md bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Processor Inventory ID:</span>{" "}
            {inputData.processorInventoryId}
          </p>
        </div>
        <LabInputForm
          initialData={{
            processorInventoryId: inputData.processorInventoryId,
            reportpath: inputData.reportpath,
            description: inputData.description,
            isDone: inputData.isDone,
          }}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isEdit={true}
        />
      </div>

      <ToastProvider />
    </div>
  )
}

export default EditInput

