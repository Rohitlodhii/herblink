import * as React from "react"
import { Button } from "@/components/ui/button"
import { Eye, Edit, CheckCircle2, Loader2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

export interface LabProcessorInput {
  id: string
  processorInventoryId: string
  reportpath?: string | null
  description?: string | null
  isDone: boolean
  createdAt?: string
  updatedAt?: string
  // Backend includes processorInventory relation
  processorInventory?: {
    id: string
    [key: string]: any
  }
}

interface LabInputTableProps {
  inputs: LabProcessorInput[]
  onMarkDone?: (id: string) => Promise<void>
  markDoneLoading?: string | null
  highlightPending?: boolean
}

export const LabInputTable: React.FC<LabInputTableProps> = ({
  inputs,
  onMarkDone,
  markDoneLoading,
  highlightPending = false,
}) => {
  const navigate = useNavigate()

  // Ensure inputs is always an array
  const safeInputs = Array.isArray(inputs) ? inputs : []

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A"
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return "N/A"
    }
  }

  const isPending = (input: LabProcessorInput) => {
    return !input.reportpath && !input.isDone
  }

  if (safeInputs.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">No processor inputs found.</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                Processor Inventory
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                Description
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                Report Path
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {safeInputs.map((input) => {
              const pending = isPending(input)
              const rowClass = highlightPending && pending
                ? "bg-yellow-50/50 dark:bg-yellow-900/10"
                : ""

              return (
                <tr key={input.id} className={rowClass}>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {input.id.slice(0, 8)}...
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {input.processorInventoryId}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground max-w-xs truncate">
                    {input.description || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {input.reportpath ? (
                      <span className="text-foreground truncate max-w-xs block">
                        {input.reportpath}
                      </span>
                    ) : (
                      <span className="text-muted-foreground italic">No report</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {input.isDone ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200">
                        <CheckCircle2 className="h-3 w-3" />
                        Done
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => navigate(`/lab/processor-input/${input.id}/edit`)}
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      {onMarkDone && !input.isDone && (
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => onMarkDone(input.id)}
                          disabled={markDoneLoading === input.id}
                          title="Mark as Done"
                        >
                          {markDoneLoading === input.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <CheckCircle2 className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

