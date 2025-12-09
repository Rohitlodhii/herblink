import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { FileText, List, Clock, Plus } from "lucide-react"

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Lab Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage processor inputs and reports
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-primary/10 p-2">
              <Plus className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Add Input</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Create a new processor input record
          </p>
          <Button
            onClick={() => navigate("/lab/processor-inputs/add")}
            className="w-full"
          >
            Add New Input
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-blue-500/10 p-2">
              <List className="h-5 w-5 text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold">All Inputs</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            View and manage all processor inputs
          </p>
          <Button
            variant="outline"
            onClick={() => navigate("/lab/processor-inputs")}
            className="w-full"
          >
            View All
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-yellow-500/10 p-2">
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <h2 className="text-lg font-semibold">Pending Reports</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            View inputs requiring reports or completion
          </p>
          <Button
            variant="outline"
            onClick={() => navigate("/lab/processor-inputs/pending")}
            className="w-full"
          >
            View Pending
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

