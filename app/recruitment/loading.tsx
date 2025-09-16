export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#d4af37] mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading recruitment services...</p>
      </div>
    </div>
  )
}
