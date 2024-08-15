export const FormContainer = ({ children }) => (
  <div className="flex font-body">
    <div className="relative overflow-clip rounded-r-full shadow-2xl shadow-neutral-200">
      <img
        src="/grb/background.webp"
        alt="Background"
        className="hidden h-screen object-cover md:flex"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/70"></div>
    </div>
    <div className="mx-4 flex h-screen flex-1 flex-col items-center justify-center">
      <div className="relative">
        <img
          src="/grb/logo.webp"
          alt="Logo"
          className="w-72 rounded-full shadow-lg shadow-neutral-200"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-white/10"></div>
      </div>
      <div className="mt-8 text-center font-head text-4xl font-black text-orange-500">
        {"Giorgi's Rad Boards"}
      </div>
      {children}
    </div>
  </div>
);
