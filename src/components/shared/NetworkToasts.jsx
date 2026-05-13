import { useEffect } from "react"
import { toast } from "sonner"

const OFFLINE_ID = "tellz-network-offline"
const ONLINE_ID = "tellz-network-online"

/**
 * Subscribes to `window` online/offline and surfaces Sonner toasts app-wide.
 */
export function NetworkToasts() {
  useEffect(() => {
    function handleOffline() {
      toast.dismiss(ONLINE_ID)
      toast.error("You are offline", {
        id: OFFLINE_ID,
        duration: 12_000,
      })
    }

    function handleOnline() {
      toast.dismiss(OFFLINE_ID)
      toast.success("You are back online", {
        id: ONLINE_ID,
        duration: 5000,
      })
    }

    window.addEventListener("offline", handleOffline)
    window.addEventListener("online", handleOnline)

    if (!navigator.onLine) {
      handleOffline()
    }

    return () => {
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("online", handleOnline)
    }
  }, [])

  return null
}
