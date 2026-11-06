import NautilusLoader from "@/components/NautilusLoader";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-1 items-center justify-center" role="status">
      <NautilusLoader spinning label="Loading" className="h-16 w-16" />
    </div>
  );
}
