// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.


const App: React.FC = () => {
 
  //     {/* Main Chat Area */}
  //     <div className="flex-1 flex flex-col">
  //       <div className="flex items-center justify-between p-4 border-b bg-white">
  //         <div className="flex items-center gap-3">
  //           <Avatar className="w-10 h-10">
  //             <AvatarImage
  //               src="https://public.readdy.ai/ai/img_res/9283f10443b2fe4843bda05f3d342f49.jpg"
  //               alt={selectedChat}
  //             />
  //             <AvatarFallback>{selectedChat[0]}</AvatarFallback>
  //           </Avatar>
  //           <div>
  //             <h2 className="font-medium">{selectedChat}</h2>
  //             <span className="text-sm text-green-500">Online</span>
  //           </div>
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <Button variant="ghost" size="icon" className="!rounded-button">
  //             <i className="fas fa-search text-gray-500"></i>
  //           </Button>
  //           <Button variant="ghost" size="icon" className="!rounded-button">
  //             <i className="fas fa-video text-gray-500"></i>
  //           </Button>
  //           <Button variant="ghost" size="icon" className="!rounded-button">
  //             <i className="fas fa-phone text-gray-500"></i>
  //           </Button>
  //           <Button variant="ghost" size="icon" className="!rounded-button">
  //             <i className="fas fa-exclamation text-gray-500"></i>
  //           </Button>
  //           <Button variant="ghost" size="icon" className="!rounded-button">
  //             <i className="fas fa-ellipsis-v text-gray-500"></i>
  //           </Button>
  //         </div>
  //       </div>
  //       <ScrollArea className="flex-1 p-4">
  //         <div className="space-y-4">
  //           <div className="flex justify-start">
  //             <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
  //               <p>Hi there! I'm interested in your services.</p>
  //               <span className="text-xs text-gray-500 mt-1">02:39 PM</span>
  //             </div>
  //           </div>
  //           <div className="flex justify-start">
  //             <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
  //               <p>
  //                 Can you tell me more about what you offer? Can you explain it
  //                 breifly...
  //               </p>
  //               <span className="text-xs text-gray-500 mt-1">02:39 PM</span>
  //             </div>
  //           </div>
  //           <div className="flex justify-end">
  //             <div className="bg-purple-600 text-white rounded-lg p-3 max-w-[70%]">
  //               <p>
  //                 Hello! Absolutely, we provide a range of services tailored to
  //                 meet various business needs. Could you specify what you're
  //                 looking for?
  //               </p>
  //               <div className="flex justify-end items-center gap-2 mt-1">
  //                 <span className="text-xs">02:39 PM</span>
  //                 <i className="fas fa-check-double text-xs"></i>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </ScrollArea>
  //       <div className="p-4 border-t bg-white">
  //         <div className="flex items-center gap-2">
  //           <Button variant="ghost" size="icon" className="!rounded-button">
  //             <i className="fas fa-plus text-gray-500"></i>
  //           </Button>
  //           <Input
  //             type="text"
  //             value={message}
  //             onChange={(e) => setMessage(e.target.value)}
  //             placeholder="Type Your Message"
  //             className="flex-1"
  //           />
  //           <Button variant="ghost" size="icon" className="!rounded-button">
  //             <i className="far fa-smile text-gray-500"></i>
  //           </Button>
  //           <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button">
  //             <i className="fas fa-paper-plane mr-2"></i>
  //             Send
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //     {/* Right Sidebar */}
  //     <div className="w-80 border-l bg-white p-4">
  //       <div className="text-center">
  //         <Avatar className="w-24 h-24 mx-auto">
  //           <AvatarImage
  //             src="https://public.readdy.ai/ai/img_res/e5490f4394d76f1cf658005b0c1cd986.jpg"
  //             alt={selectedChat}
  //           />
  //           <AvatarFallback>{selectedChat[0]}</AvatarFallback>
  //         </Avatar>
  //         <h2 className="text-xl font-medium mt-4">{selectedChat}</h2>
  //         <p className="text-gray-500">Product Designer</p>
  //       </div>
  //       <div className="mt-6">
  //         <h3 className="font-medium mb-4">Contact Information</h3>
  //         <div className="space-y-4">
  //           <div className="flex items-center gap-3">
  //             <i className="fas fa-envelope text-gray-500"></i>
  //             <span className="text-sm">edward.lietz@company.com</span>
  //           </div>
  //           <div className="flex items-center gap-3">
  //             <i className="fas fa-phone text-gray-500"></i>
  //             <span className="text-sm">+1 (555) 123-4567</span>
  //           </div>
  //           <div className="flex items-center gap-3">
  //             <i className="fas fa-map-marker-alt text-gray-500"></i>
  //             <span className="text-sm">San Francisco, CA</span>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="mt-6">
  //         <h3 className="font-medium mb-4">Shared Files</h3>
  //         <div className="space-y-4">
  //           <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
  //             <div className="flex items-center gap-3">
  //               <i className="fas fa-file-pdf text-red-500"></i>
  //               <div>
  //                 <p className="text-sm font-medium">Ecommerce...</p>
  //                 <span className="text-xs text-gray-500">14.23 KB</span>
  //               </div>
  //             </div>
  //             <Button variant="ghost" size="icon" className="!rounded-button">
  //               <i className="fas fa-download text-gray-500"></i>
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="  ">
      <h1>Hello</h1>
    </div>
  );
};
export default App;
