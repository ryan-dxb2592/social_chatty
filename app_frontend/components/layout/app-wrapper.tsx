

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-screen bg-gray-50">
    {children}
  </div>;
};

export default AppWrapper;


