export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#2F29E6] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#2F29E6] font-medium">Loading...</p>
      </div>
    </div>
  );
}
