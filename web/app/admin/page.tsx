"use client";

import { useEffect, useState } from "react";
import Accessbility from "@/components/core/Navbar/Access";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AdminVerificationService } from "@/services/admin/verification.admin";
import { Loader2, Check, X, Info, Users, FlaskConical, Factory, Package } from "lucide-react";
import { toast } from "sonner";

type EntityType = "farmers" | "labs" | "processors" | "manufacturers";

const ENTITY_CONFIG: { key: EntityType; label: string; icon: any; color: string }[] = [
  { key: "farmers", label: "Farmers", icon: Users, color: "text-emerald-500" },
  { key: "labs", label: "Labs", icon: FlaskConical, color: "text-sky-500" },
  { key: "processors", label: "Processors", icon: Factory, color: "text-amber-500" },
  { key: "manufacturers", label: "Manufacturers", icon: Package, color: "text-indigo-500" },
];

export default function AdminPage() {
  const [active, setActive] = useState<EntityType>("farmers");
  const [data, setData] = useState<Record<EntityType, any[]>>({
    farmers: [],
    labs: [],
    processors: [],
    manufacturers: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);

  useEffect(() => {
    load(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const load = async (entity: EntityType) => {
    try {
      setLoading(true);
      const res = await AdminVerificationService.listNotVerified(entity);
      setData((prev) => ({ ...prev, [entity]: res.farmers || res.labs || res.processors || res.manufacturers || res.data || [] }));
    } catch (err: any) {
      toast.error(err?.message || "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (entity: EntityType, id: string, action: "verify" | "reject") => {
    const actionKey = `${action}-${id}`;
    try {
      setLoadingAction(actionKey);
      if (action === "verify") {
        await AdminVerificationService.verify(entity, id);
        toast.success(`${entity.slice(0, -1)} verified`);
      } else {
        await AdminVerificationService.reject(entity, id);
        toast.success(`${entity.slice(0, -1)} rejected`);
      }
      load(entity);
    } catch (err: any) {
      toast.error(err?.message || "Action failed");
    } finally {
      setLoadingAction(null);
    }
  };

  const currentList = data[active] || [];

  return (
    <div className="max-w-6xl mx-auto w-full h-screen border-l border-r border-b border-primary/40 bg-background overflow-hidden">
      <Accessbility />
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-48 border-r border-border bg-muted/40">
          <div className="p-3 text-sm font-semibold text-muted-foreground uppercase">Entities</div>
          <div className="flex flex-col">
            {ENTITY_CONFIG.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  className={`flex items-center gap-2 px-3 py-2 text-sm text-left border-l-4 transition-colors ${
                    isActive ? "bg-background border-primary text-foreground" : "border-transparent text-muted-foreground hover:bg-muted"
                  }`}
                  onClick={() => setActive(item.key)}
                >
                  <Icon className={`size-4 ${item.color}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-14 border-b border-border flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="text-sm text-muted-foreground">Unverified</div>
              <div className="text-base font-semibold capitalize">{active}</div>
            </div>
            <Button variant="outline" size="sm" onClick={() => load(active)} disabled={loading}>
              <Loader2 className={`size-4 mr-2 ${loading ? "animate-spin" : "hidden"}`} />
              Refresh
            </Button>
          </div>

          <div className="flex-1 overflow-hidden p-4">
            {loading ? (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <Loader2 className="size-5 animate-spin mr-2" />
                Loading...
              </div>
            ) : currentList.length === 0 ? (
              <Card>
                <CardContent className="py-8 text-center text-muted-foreground">No unverified {active} found.</CardContent>
              </Card>
            ) : (
              <ScrollArea className="h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-2">
                  {currentList.map((item: any) => (
                    <Card key={item._id || item.id}>
                      <CardHeader>
                        <CardTitle className="text-base">{item.name || item.labName || item.organization || item.email || "No name"}</CardTitle>
                        <CardDescription className="break-all text-xs text-muted-foreground">
                          {item.email || item._id || item.id}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-xs bg-muted rounded-md p-2 border border-border">
                          <div className="font-semibold text-muted-foreground mb-1">Details</div>
                          <pre className="whitespace-pre-wrap break-all text-[11px]">{JSON.stringify(item, null, 2)}</pre>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleAction(active, item._id || item.id, "verify")}
                            disabled={loadingAction === `verify-${(item._id || item.id)}`}
                          >
                            {loadingAction === `verify-${(item._id || item.id)}` ? (
                              <Loader2 className="size-4 mr-2 animate-spin" />
                            ) : (
                              <Check className="size-4 mr-2" />
                            )}
                            Verify
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleAction(active, item._id || item.id, "reject")}
                            disabled={loadingAction === `reject-${(item._id || item.id)}`}
                          >
                            {loadingAction === `reject-${(item._id || item.id)}` ? (
                              <Loader2 className="size-4 mr-2 animate-spin" />
                            ) : (
                              <X className="size-4 mr-2" />
                            )}
                            Reject
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              toast.info("Details copied");
                              navigator.clipboard.writeText(JSON.stringify(item, null, 2));
                            }}
                          >
                            <Info className="size-4 mr-2" />
                            Copy Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

