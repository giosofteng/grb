export const FormContainer = ({ children }) => (
  <div className="flex">
    <div className="relative overflow-clip rounded-r-full shadow-2xl shadow-neutral-200">
      <img
        src="/background.webp"
        alt="Background"
        className="hidden md:flex h-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
    </div>
    <div className="flex flex-1 flex-col justify-center items-center h-screen mx-4">
      <div className="relative">
        <img
          src="/logo.webp"
          alt="Logo"
          className="w-72 rounded-full shadow-lg shadow-neutral-200"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
      </div>
      <div className="mt-8 font-head font-black text-center text-4xl text-orange-500">
        {"Giorgi's Rad Boards"}
      </div>
      {children}
    </div>
  </div>
);
