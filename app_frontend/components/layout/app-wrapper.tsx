

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-screen bg-gray-50 overflow-hidden relative">
    {children}
  </div>;
};

export default AppWrapper;


