import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, FileText } from "lucide-react"

interface LabInputFormProps {
  initialData?: {
    processorInventoryId?: string
    reportpath?: string | null
    description?: string | null
    isDone?: boolean
  }
  onSubmit: (data: {
    processorInventoryId?: string
    reportpath?: string
    description?: string
    isDone?: boolean
  }) => Promise<void>
  isLoading?: boolean
  isEdit?: boolean
}

export const LabInputForm: React.FC<LabInputFormProps> = ({
  initialData,
  onSubmit,
  isLoading = false,
  isEdit = false,
}) => {
  const [processorInventoryId, setProcessorInventoryId] = React.useState(
    initialData?.processorInventoryId || ""
  )
  const [reportpath, setReportpath] = React.useState(
    initialData?.reportpath || ""
  )
  const [description, setDescription] = React.useState(
    initialData?.description || ""
  )
  const [isDone, setIsDone] = React.useState(initialData?.isDone || false)
  const [selectedDocument, setSelectedDocument] = React.useState<string | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload: {
      processorInventoryId?: string
      reportpath?: string
      description?: string
      isDone?: boolean
    } = {}

    if (!isEdit) {
      if (!processorInventoryId.trim()) {
        return
      }
      payload.processorInventoryId = processorInventoryId.trim()
    }

    // Send random string "aaaaaaa" as reportpath if document was selected
    if (selectedDocument) {
      payload.reportpath = "aaaaaaa"
    }

    if (description.trim()) {
      payload.description = description.trim()
    }

    if (isEdit) {
      payload.isDone = isDone
    }

    await onSubmit(payload)
  }

  const handleDocumentPicker = () => {
    fileInputRef.current?.click()
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedDocument(file.name)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {!isEdit && (
        <div className="space-y-2">
          <label
            htmlFor="processorInventoryId"
            className="text-sm font-medium text-foreground"
          >
            Processor Inventory ID <span className="text-destructive">*</span>
          </label>
          <Input
            id="processorInventoryId"
            type="text"
            value={processorInventoryId}
            onChange={(e) => setProcessorInventoryId(e.target.value)}
            placeholder="Enter processor inventory ID"
            required
            disabled={isLoading}
          />
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Document (optional)
        </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
          disabled={isLoading}
        />
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleDocumentPicker}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            Pick Document
          </Button>
          {selectedDocument && (
            <span className="text-sm text-muted-foreground truncate">
              {selectedDocument}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-foreground">
          Description (optional)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          disabled={isLoading}
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          rows={4}
        />
      </div>

      {isEdit && (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isDone"
            checked={isDone}
            onChange={(e) => setIsDone(e.target.checked)}
            disabled={isLoading}
            className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring/50"
          />
          <label htmlFor="isDone" className="text-sm font-medium text-foreground">
            Mark as Done
          </label>
        </div>
      )}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {isEdit ? "Updating..." : "Adding..."}
          </>
        ) : (
          isEdit ? "Update Input" : "Add Input"
        )}
      </Button>
    </form>
  )
}

