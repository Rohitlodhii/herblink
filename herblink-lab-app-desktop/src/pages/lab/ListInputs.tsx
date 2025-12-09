import * as React from "react"
import { useNavigate } from "react-router-dom"
import { LabInputTable, type LabProcessorInput } from "@/components/lab/LabInputTable"
import { useToast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { Plus, RefreshCw, Loader2, ArrowLeft } from "lucide-react"

const ListInputs: React.FC = () => {
  const navigate = useNavigate()
  const { showToast, ToastProvider } = useToast()
  const [inputs, setInputs] = React.useState<LabProcessorInput[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [markDoneLoading, setMarkDoneLoading] = React.useState<string | null>(null)

  const fetchInputs = React.useCallback(async () => {
    setIsLoading(true)
    try {
      const result = await window.api.lab.listProcessorInputs()

      // Debug logging
      console.log('ListInputs - API Result:', result)

      if (result.logout) {
        showToast("Session expired. Please login again.", "error")
        setTimeout(() => navigate("/login", { replace: true }), 2000)
        return
      }

      if (result.error) {
        showToast(result.error, "error")
        setInputs([])
        return
      }

      if (result.data) {
        // Ensure result.data is an array
        const dataArray = Array.isArray(result.data) ? result.data : []
        console.log('ListInputs - Data Array:', dataArray, 'Length:', dataArray.length)
        setInputs(dataArray)
      } else {
        console.log('ListInputs - No data in result')
        setInputs([])
      }
    } catch (error) {
      console.error('ListInputs - Error:', error)
      showToast(
        error instanceof Error ? error.message : "Failed to fetch processor inputs",
        "error"
      )
      setInputs([])
    } finally {
      setIsLoading(false)
    }
  }, [navigate, showToast])

  React.useEffect(() => {
    fetchInputs()
  }, [fetchInputs])

  const handleMarkDone = async (id: string) => {
    setMarkDoneLoading(id)
    try {
      const result = await window.api.lab.updateProcessorInput(id, { isDone: true })

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
        showToast(`Input marked as done successfully! ID: ${inputId}`, "success")
        // Refresh the list
        await fetchInputs()
      }
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Failed to update input",
        "error"
      )
    } finally {
      setMarkDoneLoading(null)
    }
  }

  return (
    <div className="container mx-auto max-w-7xl py-8 px-4">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">All Processor Inputs</h1>
            <p className="text-muted-foreground mt-2">
              View and manage all lab processor inputs.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={fetchInputs}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Refresh
            </Button>
            <Button onClick={() => navigate("/lab/processor-inputs/add")}>
              <Plus className="h-4 w-4 mr-2" />
              Add Input
            </Button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : inputs.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">No processor inputs found.</p>
          <p className="text-xs text-muted-foreground mt-2">
            Try adding a new processor input or check the console for debugging information.
          </p>
        </div>
      ) : (
        <LabInputTable
          inputs={inputs}
          onMarkDone={handleMarkDone}
          markDoneLoading={markDoneLoading}
        />
      )}

      <ToastProvider />
    </div>
  )
}

export default ListInputs

