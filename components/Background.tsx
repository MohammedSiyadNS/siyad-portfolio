export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Glow Top Left */}
      <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[180px]" />

      {/* Glow Bottom Right */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[180px]" />

      {/* Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
      <div className="absolute top-40 right-40 w-1 h-1 bg-purple-300 rounded-full animate-pulse" />
      <div className="absolute top-72 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-32 w-1 h-1 bg-purple-300 rounded-full animate-pulse" />
      <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse" />

    </div>
  );
}