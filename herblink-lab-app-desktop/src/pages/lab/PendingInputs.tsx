import * as React from "react"
import { useNavigate } from "react-router-dom"
import { LabInputTable, type LabProcessorInput } from "@/components/lab/LabInputTable"
import { useToast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { RefreshCw, Loader2, AlertCircle, ArrowLeft } from "lucide-react"

const PendingInputs: React.FC = () => {
  const navigate = useNavigate()
  const { showToast, ToastProvider } = useToast()
  const [inputs, setInputs] = React.useState<LabProcessorInput[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [markDoneLoading, setMarkDoneLoading] = React.useState<string | null>(null)

  const fetchPendingInputs = React.useCallback(async () => {
    setIsLoading(true)
    try {
      const result = await window.api.lab.listPendingProcessorInputs()

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
        // Filter to show only entries without reports and not done
        const pending = dataArray.filter(
          (input) => !input.reportpath && !input.isDone
        )
        setInputs(pending)
      } else {
        setInputs([])
      }
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Failed to fetch pending inputs",
        "error"
      )
      setInputs([])
    } finally {
      setIsLoading(false)
    }
  }, [navigate, showToast])

  React.useEffect(() => {
    fetchPendingInputs()
  }, [fetchPendingInputs])

  const handleMarkDone = async (inputId: string) => {
    setMarkDoneLoading(inputId)
    try {
      const result = await window.api.lab.updateProcessorInput(inputId, { isDone: true })

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
        const updatedId = result.data.id || inputId || 'N/A'
        showToast(`Input marked as done successfully! ID: ${updatedId}`, "success")
        // Refresh the list
        await fetchPendingInputs()
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
            <h1 className="text-3xl font-semibold tracking-tight">Pending Reports</h1>
            <p className="text-muted-foreground mt-2">
              Processor inputs that require reports or completion.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={fetchPendingInputs}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Refresh
            </Button>
            <Button onClick={() => navigate("/lab/processor-inputs")}>
              View All
            </Button>
          </div>
        </div>
      </div>

      {inputs.length === 0 && !isLoading && (
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No pending reports found.</p>
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <LabInputTable
          inputs={inputs}
          onMarkDone={handleMarkDone}
          markDoneLoading={markDoneLoading}
          highlightPending={true}
        />
      )}

      <ToastProvider />
    </div>
  )
}

export default PendingInputs

