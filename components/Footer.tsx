export default function Footer() {
    return (
        <footer className="w-full py-4 flex justify-center items-center bg-transparent">
        <div className="w-full max-w-screen-lg flex items-center justify-center">
          {/* Line on the left */}
          <div className="flex-grow border-t border-gray-400"></div>
  
          {/* Text in the center */}
          <span className="mx-4 text-gray-600 text-sm">© UMAC 2024. All rights reserved.</span>
  
          {/* Line on the right */}
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </footer>
    );
}

