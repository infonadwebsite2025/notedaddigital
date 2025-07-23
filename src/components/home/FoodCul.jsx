import React, { useState } from "react";

const FoodCul = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 overflow-hidden">
      <style jsx>{`
        @keyframes jumpLeft {
          0% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateX(-30px) translateY(-15px) rotate(-2deg) scale(1.02); }
          50% { transform: translateX(-50px) translateY(-25px) rotate(-3deg) scale(1.05); }
          75% { transform: translateX(-30px) translateY(-15px) rotate(-2deg) scale(1.02); }
          100% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); }
        }
        
        @keyframes jumpRight {
          0% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateX(30px) translateY(-15px) rotate(2deg) scale(1.02); }
          50% { transform: translateX(50px) translateY(-25px) rotate(3deg) scale(1.05); }
          75% { transform: translateX(30px) translateY(-15px) rotate(2deg) scale(1.02); }
          100% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(1deg); }
          66% { transform: translateY(-3px) rotate(-1deg); }
        }
        
        @keyframes flipCorners {
          0% { transform: rotateY(0deg) rotateX(0deg) translateZ(0px); }
          25% { transform: rotateY(15deg) rotateX(-10deg) translateZ(20px); }
          50% { transform: rotateY(-15deg) rotateX(10deg) translateZ(40px); }
          75% { transform: rotateY(10deg) rotateX(-5deg) translateZ(20px); }
          100% { transform: rotateY(0deg) rotateX(0deg) translateZ(0px); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(245, 158, 11, 0.3); }
          50% { box-shadow: 0 0 25px rgba(245, 158, 11, 0.8), 0 0 50px rgba(168, 85, 247, 0.4); }
        }
        
        @keyframes colorShift {
          0% { filter: hue-rotate(0deg); }
          25% { filter: hue-rotate(90deg); }
          50% { filter: hue-rotate(180deg); }
          75% { filter: hue-rotate(270deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        @keyframes slideIn {
          0% { transform: translateX(-100%) scale(0.8); opacity: 0; }
          50% { transform: translateX(10%) scale(1.1); opacity: 0.8; }
          100% { transform: translateX(0%) scale(1); opacity: 1; }
        }
        
        @keyframes rotateContent {
          0%, 100% { transform: perspective(1000px) rotateY(0deg); }
          50% { transform: perspective(1000px) rotateY(10deg); }
        }
        
        .jump-left {
          animation: jumpLeft 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .jump-right {
          animation: jumpRight 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .flip-continuous {
          animation: flipCorners 2s infinite ease-in-out;
          transform-style: preserve-3d;
        }
        
        .wiggle-effect {
          animation: wiggle 1s ease-in-out infinite;
        }
        
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
        
        .color-shift {
          animation: colorShift 3s linear infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .float-icon {
          animation: float 3s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .rotate-content {
          animation: rotateContent 4s ease-in-out infinite;
        }
      `}</style>
      
      <div 
        className={`w-full max-w-lg transform transition-all duration-500 cursor-pointer ${
          isHovered ? (Math.random() > 0.5 ? 'jump-left' : 'jump-right') : ''
        } ${isHovered ? 'flip-continuous' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`bg-gray-700 rounded-xl p-8 shadow-lg transition-all duration-500 relative overflow-hidden ${
            isHovered ? 'shadow-2xl shadow-amber-500/20 scale-105 glow-effect wiggle-effect' : 'hover:shadow-xl'
          } ${isHovered ? 'rotate-content' : ''}`}
          style={{
            background: isHovered 
              ? "linear-gradient(135deg, #374151 0%, #4B5563 50%, #6B7280 100%)"
              : "linear-gradient(135deg, #374151 0%, #374151 100%)",
          }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-amber-400 rounded-full opacity-0 ${
                  isHovered ? 'opacity-30 color-shift' : ''
                } transition-opacity duration-300`}
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.15}s`,
                  animation: isHovered ? 'bounce 1.2s infinite, colorShift 2s infinite' : 'none'
                }}
              />
            ))}
            {/* Extra floating elements */}
            {[...Array(4)].map((_, i) => (
              <div
                key={`extra-${i}`}
                className={`absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 ${
                  isHovered ? 'opacity-50' : ''
                } transition-opacity duration-500`}
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${40 + i * 10}%`,
                  animationDelay: `${i * 0.3}s`,
                  animation: isHovered ? 'float 2s infinite' : 'none'
                }}
              />
            ))}
          </div>

          {/* Gradient Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-amber-500 via-purple-500 to-gray-700 transition-all duration-500 ${
              isHovered ? 'opacity-30 shimmer-effect' : 'opacity-10'
            }`}
          />

          {/* Content Container */}
          <div className="relative z-10">
            {/* Header */}
            <div className={`mb-6 transition-all duration-500 ${isHovered ? 'transform translate-y-[-5px] slide-in' : ''}`}>
              <h2 className={`text-2xl font-bold text-white mb-2 transition-all duration-300 ${
                isHovered ? 'text-shadow-lg scale-105 wiggle-effect' : ''
              }`}>
                NAD Food Culture:
                <span className={`text-amber-500 ml-2 transition-all duration-300 ${
                  isHovered ? 'text-amber-300 animate-pulse color-shift' : ''
                }`}>
                  Powered by Pizza and Ideas
                </span>
              </h2>
              <p className={`text-gray-300 text-lg transition-all duration-300 ${
                isHovered ? 'text-gray-100 transform translate-x-2 slide-in' : ''
              }`}>
                We don't skip meals. We create them.
              </p>
            </div>

            {/* List Items */}
            <ul className="space-y-4 mb-6">
              {[
                { icon: "💡", text: "Breakfast? Brainstorming.", delay: "0s" },
                { icon: "🚀", text: "Lunch? Launch planning.", delay: "0.1s" },
                { icon: "♟️", text: "Snacks? Strategy sessions.", delay: "0.2s" }
              ].map((item, index) => (
                <li 
                  key={index}
                  className={`flex items-center text-white transition-all duration-500 ${
                    isHovered ? 'transform translate-x-3 scale-105' : ''
                  }`}
                  style={{ transitionDelay: isHovered ? item.delay : '0s' }}
                >
                  <span 
                    className={`text-amber-500 mr-3 text-xl transition-all duration-300 ${
                      isHovered ? 'float-icon transform scale-125 text-amber-300 wiggle-effect color-shift' : ''
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className={`text-lg transition-all duration-300 ${
                    isHovered ? 'font-medium' : ''
                  }`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className={`mt-6 pt-6 border-t transition-all duration-500 ${
              isHovered ? 'border-purple-400 transform translate-y-[-3px]' : 'border-gray-600'
            }`}>
              <p className={`text-lg font-medium transition-all duration-500 ${
                isHovered ? 'text-purple-300 transform scale-105' : 'text-purple-400'
              }`}>
                Some agencies offer free coffee. We offer a full-course
                experience.
              </p>
            </div>
            
            {/* Hover Effect Indicator */}
            <div className={`absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full transition-all duration-300 ${
              isHovered ? 'scale-150 bg-amber-300 animate-pulse' : 'scale-0'
            }`} />
            
            {/* Funny Hindi Message - Background */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 ${
              isHovered ? 'opacity-70 scale-100 slide-in' : 'opacity-0 scale-75'
            }`}>
              <div className={`bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg border border-white/20 ${
                isHovered ? 'wiggle-effect glow-effect' : ''
              }`}>
                <div className="flex items-center space-x-2">
                  <span className={`bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center text-black font-bold text-xs ${
                    isHovered ? 'animate-bounce color-shift' : ''
                  }`}>
                    ?
                  </span>
                  <span className={`text-white text-sm ${isHovered ? 'color-shift' : ''}`}>Kya karna chahte ho?</span>
                  <span className={`bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center text-black font-bold text-xs ${
                    isHovered ? 'animate-pulse color-shift' : ''
                  }`}>
                    :)
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Side Glow Effects */}
          <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-purple-500 transition-all duration-500 ${
            isHovered ? 'opacity-100 w-2' : 'opacity-0'
          }`} />
          <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-amber-500 transition-all duration-500 ${
            isHovered ? 'opacity-100 w-2' : 'opacity-0'
          }`} />
        </div>
      </div>
    </div>
  );
};

export default FoodCul;
// // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// import React from "react";

// const FoodCul = () => {
//   React.useEffect(() => {
//     const foodCultureTrigger = document.getElementById("foodCultureTrigger");
//     const foodCultureModal = document.getElementById("foodCultureModal");
//     const closeModal = document.getElementById("closeModal");
//     const businessDiningTrigger = document.getElementById(
//       "businessDiningTrigger",
//     );
//     const businessDiningModal = document.getElementById("businessDiningModal");
//     const closeBusinessDiningModal = document.getElementById(
//       "closeBusinessDiningModal",
//     );
//     const businessDiningForm = document.getElementById("businessDiningForm");
//     const lunchPlanningTrigger = document.getElementById(
//       "lunchPlanningTrigger",
//     );
//     const lunchPlanningModal = document.getElementById("lunchPlanningModal");
//     const closeLunchModal = document.getElementById("closeLunchModal");
//     const scheduleLunchBtn = document.getElementById("scheduleLunchBtn");
//     const menuCompareTrigger = document.getElementById("menuCompareTrigger");
//     const menuCompareModal = document.getElementById("menuCompareModal");
//     const closeMenuModal = document.getElementById("closeMenuModal");
//     const scheduleTastingBtn = document.getElementById("scheduleTastingBtn");
//     const breakfastTrigger = document.getElementById("breakfastTrigger");
//     const breakfastModal = document.getElementById("breakfastModal");
//     const closeBreakfastModal = document.getElementById("closeBreakfastModal");
//     const scheduleBreakfastBtn = document.getElementById(
//       "scheduleBreakfastBtn",
//     );
//     const joinLunchBtn = document.getElementById("joinLunchBtn");
//     const emailFormModal = document.getElementById("emailFormModal");
//     const closeEmailForm = document.getElementById("closeEmailForm");
//     const lunchRequestForm = document.getElementById("lunchRequestForm");
//     const openFoodCultureModal = () => {
//       if (foodCultureModal) {
//         foodCultureModal.classList.remove("hidden");
//       }
//     };
//     const closeFoodCultureModal = () => {
//       if (foodCultureModal) {
//         foodCultureModal.classList.add("hidden");
//       }
//     };
//     const openEmailForm = () => {
//       if (emailFormModal && foodCultureModal) {
//         foodCultureModal.classList.add("hidden");
//         emailFormModal.classList.remove("hidden");
//       }
//     };
//     const closeEmailFormModal = () => {
//       if (emailFormModal) {
//         emailFormModal.classList.add("hidden");
//       }
//     };
//     const openLunchPlanningModal = () => {
//       if (lunchPlanningModal) {
//         lunchPlanningModal.classList.remove("hidden");
//       }
//     };
//     const closeLunchPlanningModal = () => {
//       if (lunchPlanningModal) {
//         lunchPlanningModal.classList.add("hidden");
//       }
//     };
//     const handleScheduleLunch = () => {
//       if (lunchPlanningModal && emailFormModal) {
//         lunchPlanningModal.classList.add("hidden");
//         emailFormModal.classList.remove("hidden");
//       }
//     };
//     const handleSubmit = (e) => {
//   e.preventDefault();
//   alert("Thank you! We will get back to you soon about the lunch meeting.");
//   closeEmailFormModal();
// };


//     const openBusinessDiningModal = () => {
//       if (businessDiningModal) {
//         businessDiningModal.classList.remove("hidden");
//       }
//     };

//     const closeBusinessDiningModalHandler = () => {
//       if (businessDiningModal) {
//         businessDiningModal.classList.add("hidden");
//       }
//     };

//     const handleBusinessDiningSubmit = (e) => {
//       e.preventDefault();
//       alert(
//         "Thank you for your business dining request. Our team will contact you shortly to confirm the details.",
//       );
//       closeBusinessDiningModalHandler();
//     };
//     const openBreakfastModal = () => {
//       if (breakfastModal) {
//         breakfastModal.classList.remove("hidden");
//       }
//     };
//     const closeBreakfastModalHandler = () => {
//       if (breakfastModal) {
//         breakfastModal.classList.add("hidden");
//       }
//     };
//     const handleScheduleBreakfast = () => {
//       if (breakfastModal && emailFormModal) {
//         breakfastModal.classList.add("hidden");
//         emailFormModal.classList.remove("hidden");
//       }
//     };
//     const openMenuCompareModal = () => {
//       if (menuCompareModal) {
//         menuCompareModal.classList.remove("hidden");
//       }
//     };
//     const closeMenuCompareModal = () => {
//       if (menuCompareModal) {
//         menuCompareModal.classList.add("hidden");
//       }
//     };
//     const handleScheduleTasting = () => {
//       if (menuCompareModal && emailFormModal) {
//         menuCompareModal.classList.add("hidden");
//         emailFormModal.classList.remove("hidden");
//       }
//     };
//     foodCultureTrigger?.addEventListener("click", openFoodCultureModal);
//     closeModal?.addEventListener("click", closeFoodCultureModal);
//     businessDiningTrigger?.addEventListener("click", openBusinessDiningModal);
//     closeBusinessDiningModal?.addEventListener(
//       "click",
//       closeBusinessDiningModalHandler,
//     );
//     businessDiningForm?.addEventListener("submit", handleBusinessDiningSubmit);
//     joinLunchBtn?.addEventListener("click", openEmailForm);
//     menuCompareTrigger?.addEventListener("click", openMenuCompareModal);
//     closeMenuModal?.addEventListener("click", closeMenuCompareModal);
//     scheduleTastingBtn?.addEventListener("click", handleScheduleTasting);
//     closeEmailForm?.addEventListener("click", closeEmailFormModal);
//     lunchRequestForm?.addEventListener("submit", handleSubmit);
//     breakfastTrigger?.addEventListener("click", openBreakfastModal);
//     closeBreakfastModal?.addEventListener("click", closeBreakfastModalHandler);
//     scheduleBreakfastBtn?.addEventListener("click", handleScheduleBreakfast);
//     lunchPlanningTrigger?.addEventListener("click", openLunchPlanningModal);
//     closeLunchModal?.addEventListener("click", closeLunchPlanningModal);
//     scheduleLunchBtn?.addEventListener("click", handleScheduleLunch);
//     // Cleanup
//     return () => {
//       foodCultureTrigger?.removeEventListener("click", openFoodCultureModal);
//       closeModal?.removeEventListener("click", closeFoodCultureModal);
//       businessDiningTrigger?.removeEventListener(
//         "click",
//         openBusinessDiningModal,
//       );
//       closeBusinessDiningModal?.removeEventListener(
//         "click",
//         closeBusinessDiningModalHandler,
//       );
//       businessDiningForm?.removeEventListener(
//         "submit",
//         handleBusinessDiningSubmit,
//       );
//       joinLunchBtn?.removeEventListener("click", openEmailForm);
//       menuCompareTrigger?.removeEventListener("click", openMenuCompareModal);
//       closeMenuModal?.removeEventListener("click", closeMenuCompareModal);
//       scheduleTastingBtn?.removeEventListener("click", handleScheduleTasting);
//       closeEmailForm?.removeEventListener("click", closeEmailFormModal);
//       lunchRequestForm?.removeEventListener("submit", handleSubmit);
//       breakfastTrigger?.removeEventListener("click", openBreakfastModal);
//       closeBreakfastModal?.removeEventListener(
//         "click",
//         closeBreakfastModalHandler,
//       );
//       scheduleBreakfastBtn?.removeEventListener(
//         "click",
//         handleScheduleBreakfast,
//       );
//       lunchPlanningTrigger?.removeEventListener(
//         "click",
//         openLunchPlanningModal,
//       );
//       closeLunchModal?.removeEventListener("click", closeLunchPlanningModal);
//       scheduleLunchBtn?.removeEventListener("click", handleScheduleLunch);
//     };
//   }, []);
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-lg transform transition-all duration-300 hover:scale-[1.02] cursor-pointer">
//         <div
//           className="bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
//           style={{
//             background: "linear-gradient(135deg, #374151 0%, #374151 100%)",
//           }}
//         >
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-500 via-purple-500 to-gray-700 transition-opacity duration-300 hover:opacity-20"></div>
//           {/* Content Container */}
//           <div className="relative z-10">
//             {/* Header */}
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-white mb-2">
//                 NAD Food Culture:
//                 <span
//                   id="foodCultureTrigger"
//                   className="text-amber-500 ml-2 cursor-pointer hover:underline"
//                 >
//                   Powered by Pizza and Ideas
//                 </span>
//               </h2>
//               {/* Modal */}
//               <div
//                 id="foodCultureModal"
//                 className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center"
//               >
//                 <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative">
//                   <button
//                     id="closeModal"
//                     className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//                   >
//                     <i className="fas fa-times text-xl"></i>
//                   </button>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                     Our Food-Driven Culture
//                   </h3>
//                   <div className="space-y-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold text-gray-700 mb-2">
//                         Success Stories
//                       </h4>
//                       <p className="text-gray-600">
//                         Our best ideas were born over shared meals. From landing
//                         major clients during breakfast meetings to solving
//                         complex challenges over pizza sessions.
//                       </p>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gray-100 p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg relative overflow-hidden group">
//                         <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                         <i className="fas fa-users text-2xl text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300"></i>
//                         <p className="text-gray-600">Team Lunches</p>
//                       </div>
//                       <div className="bg-gray-100 p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg relative overflow-hidden group">
//                         <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                         <i className="fas fa-coffee text-2xl text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300"></i>
//                         <p className="text-gray-600">Coffee Breaks</p>
//                       </div>
//                     </div>
//                     <div className="bg-amber-50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold text-amber-700 mb-2">
//                         This Week's Menu
//                       </h4>
//                       <ul className="text-gray-600 space-y-2">
//                         <li>Monday: Italian Inspiration</li>
//                         <li>Tuesday: Taco Innovation</li>
//                         <li>Wednesday: Asian Fusion</li>
//                         <li>Thursday: Mediterranean Magic</li>
//                         <li>Friday: Global Favorites</li>
//                       </ul>
//                     </div>
//                     <button
//                       id="joinLunchBtn"
//                       className="!rounded-button w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors"
//                     >
//                       Join Us for Lunch
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Breakfast Modal */}
//               <div
//                 id="breakfastModal"
//                 className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center"
//               >
//                 <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative">
//                   <button
//                     id="closeBreakfastModal"
//                     className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//                   >
//                     <i className="fas fa-times text-xl"></i>
//                   </button>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                     Breakfast Brainstorming Sessions
//                   </h3>
//                   <div className="space-y-6">
//                     <div className="bg-amber-50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold text-amber-700 mb-2">
//                         Available Time Slots
//                       </h4>
//                       <div className="grid grid-cols-2 gap-4 text-gray-600">
//                         <div className="bg-white p-3 rounded border border-amber-200">
//                           <i className="fas fa-clock text-amber-500 mr-2"></i>
//                           8:00 - 8:45 AM
//                         </div>
//                         <div className="bg-white p-3 rounded border border-amber-200">
//                           <i className="fas fa-clock text-amber-500 mr-2"></i>
//                           8:45 - 9:30 AM
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold text-gray-700 mb-2">
//                         Menu Options
//                       </h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <h5 className="font-medium text-gray-700">
//                             Continental
//                           </h5>
//                           <ul className="text-gray-600 list-disc list-inside">
//                             <li>Fresh Pastries</li>
//                             <li>Seasonal Fruits</li>
//                             <li>Yogurt Parfait</li>
//                             <li>Premium Coffee</li>
//                           </ul>
//                         </div>
//                         <div className="space-y-2">
//                           <h5 className="font-medium text-gray-700">
//                             Power Breakfast
//                           </h5>
//                           <ul className="text-gray-600 list-disc list-inside">
//                             <li>Egg White Omelette</li>
//                             <li>Whole Grain Toast</li>
//                             <li>Avocado Spread</li>
//                             <li>Green Smoothie</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <button
//                       id="scheduleBreakfastBtn"
//                       className="!rounded-button w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors"
//                     >
//                       Schedule Breakfast Meeting
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Email Form Modal */}
//               <div
//                 id="lunchPlanningModal"
//                 className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center"
//               >
//                 <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative">
//                   <button
//                     id="closeLunchModal"
//                     className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//                   >
//                     <i className="fas fa-times text-xl"></i>
//                   </button>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                     Launch Planning Lunch
//                   </h3>
//                   <div className="space-y-6">
//                     <div className="bg-amber-50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold text-amber-700 mb-2">
//                         Available Time Slots
//                       </h4>
//                       <div className="grid grid-cols-2 gap-4 text-gray-600">
//                         <div className="bg-white p-3 rounded border border-amber-200">
//                           <i className="fas fa-clock text-amber-500 mr-2"></i>
//                           12:00 - 1:00 PM
//                         </div>
//                         <div className="bg-white p-3 rounded border border-amber-200">
//                           <i className="fas fa-clock text-amber-500 mr-2"></i>
//                           1:00 - 2:00 PM
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold text-gray-700 mb-2">
//                         Meeting Rooms
//                       </h4>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="p-3 bg-white rounded border border-gray-200">
//                           <h5 className="font-medium text-gray-700">
//                             Innovation Hub
//                           </h5>
//                           <p className="text-sm text-gray-500">
//                             Capacity: 8 people
//                           </p>
//                         </div>
//                         <div className="p-3 bg-white rounded border border-gray-200">
//                           <h5 className="font-medium text-gray-700">
//                             Strategy Room
//                           </h5>
//                           <p className="text-sm text-gray-500">
//                             Capacity: 12 people
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-purple-50 p-4 rounded-lg">
//                       <h4 className="text-xl font-semibold text-purple-700 mb-2">
//                         Menu Selection
//                       </h4>
//                       <div className="grid grid-cols-1 gap-4">
//                         <div className="space-y-2">
//                           <h5 className="font-medium text-gray-700">
//                             Executive Lunch Options
//                           </h5>
//                           <ul className="text-gray-600 list-disc list-inside">
//                             <li>Gourmet Sandwiches & Wraps</li>
//                             <li>Mediterranean Bowl</li>
//                             <li>Asian Fusion Bento Box</li>
//                             <li>Chef's Special of the Day</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <button
//                       id="scheduleLunchBtn"
//                       className="!rounded-button w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors"
//                     >
//                       Schedule Launch Meeting
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 id="emailFormModal"
//                 className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center"
//               >
//                 <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
//                   <button
//                     id="closeEmailForm"
//                     className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//                   >
//                     <i className="fas fa-times text-xl"></i>
//                   </button>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                     Request Lunch Meeting
//                   </h3>
//                   <form id="lunchRequestForm" className="space-y-4">
//                     <div>
//                       <label className="block text-gray-700 mb-2">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Preferred Date
//                       </label>
//                       <input
//                         type="date"
//                         name="date"
//                         required
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Message
//                       </label>
//                       <textarea
//                         name="message"
//                         rows={4}
//                         maxLength={500}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                       ></textarea>
//                     </div>
//                     <button
//                       type="submit"
//                       className="!rounded-button w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors"
//                     >
//                       Send Request
//                     </button>
//                   </form>
//                 </div>
//               </div>
//               <p className="text-gray-300 text-lg">
//                 We don't skip meals. We create them.
//               </p>
//             </div>
//             {/* List Items */}
//             <ul className="space-y-4 mb-6">
//               <li className="flex items-center text-white">
//                 <span className="text-amber-500 mr-3">
//                   <i className="fas fa-lightbulb"></i>
//                 </span>
//                 <span
//                   id="breakfastTrigger"
//                   className="text-lg cursor-pointer hover:text-amber-300 transition-colors"
//                 >
//                   Breakfast? Brainstorming.
//                 </span>
//               </li>
//               <li className="flex items-center text-white">
//                 <span className="text-amber-500 mr-3">
//                   <i className="fas fa-rocket"></i>
//                 </span>
//                 <span
//                   id="lunchPlanningTrigger"
//                   className="text-lg cursor-pointer hover:text-amber-300 transition-colors"
//                 >
//                   Lunch? Launch planning.
//                 </span>
//               </li>
//               <li className="flex items-center text-white">
//                 <span className="text-amber-500 mr-3">
//                   <i className="fas fa-chess"></i>
//                 </span>
//                 <span className="text-lg">Snacks? Strategy sessions.</span>
//               </li>
//             </ul>
//             {/* Animated Image Gallery */}
//             <div className="grid grid-cols-3 gap-4 mt-8 mb-6">
//               <div
//                 id="businessDiningTrigger"
//                 className="relative group overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 cursor-pointer"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
//                 <img
//                   src="https://readdy.ai/api/search-image?query=modern%20luxury%20restaurant%20interior%20with%20warm%20lighting%20elegant%20dining%20setup%20and%20professional%20chefs%20working%20in%20background%20perfect%20ambiance%20for%20business%20meetings&width=400&height=300&seq=001&orientation=landscape"
//                   alt="Business Dining"
//                   className="w-full h-[200px] object-cover transform transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
//                   <h3 className="text-lg font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     Business Dining
//                   </h3>
//                   <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//                     Elegant atmosphere for strategic discussions
//                   </p>
//                 </div>
//               </div>

//               {/* Business Dining Modal */}
//               <div
//                 id="businessDiningModal"
//                 className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center"
//               >
//                 <div className="bg-white rounded-xl p-8 max-w-4xl w-full mx-4 relative overflow-y-auto max-h-[90vh]">
//                   <button
//                     id="closeBusinessDiningModal"
//                     className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//                   >
//                     <i className="fas fa-times text-xl"></i>
//                   </button>

//                   <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                     Business Dining Experience
//                   </h3>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                     <div>
//                       <img
//                         src="https://readdy.ai/api/search-image?query=elegant%20private%20dining%20room%20with%20modern%20business%20setup%20luxurious%20interior%20crystal%20chandelier%20and%20audio%20visual%20equipment%20for%20corporate%20meetings&width=600&height=400&seq=004&orientation=landscape"
//                         alt="Private Dining Room"
//                         className="w-full h-64 object-cover rounded-lg mb-4"
//                       />
//                       <h4 className="text-xl font-semibold text-gray-800 mb-2">
//                         Private Dining Rooms
//                       </h4>
//                       <ul className="text-gray-600 space-y-2">
//                         <li>
//                           <i className="fas fa-users mr-2 text-amber-500"></i>
//                           Capacity: 4-20 guests
//                         </li>
//                         <li>
//                           <i className="fas fa-tv mr-2 text-amber-500"></i>Full
//                           AV equipment
//                         </li>
//                         <li>
//                           <i className="fas fa-wifi mr-2 text-amber-500"></i>
//                           High-speed WiFi
//                         </li>
//                         <li>
//                           <i className="fas fa-temperature-low mr-2 text-amber-500"></i>
//                           Climate controlled
//                         </li>
//                       </ul>
//                     </div>

//                     <div>
//                       <img
//                         src="https://readdy.ai/api/search-image?query=gourmet%20business%20lunch%20setup%20with%20elegant%20plating%20and%20professional%20table%20service%20corporate%20dining%20experience&width=600&height=400&seq=005&orientation=landscape"
//                         alt="Business Dining Setup"
//                         className="w-full h-64 object-cover rounded-lg mb-4"
//                       />
//                       <h4 className="text-xl font-semibold text-gray-800 mb-2">
//                         Meeting Packages
//                       </h4>
//                       <ul className="text-gray-600 space-y-2">
//                         <li>
//                           <i className="fas fa-clock mr-2 text-amber-500"></i>
//                           2-4 hour blocks
//                         </li>
//                         <li>
//                           <i className="fas fa-utensils mr-2 text-amber-500"></i>
//                           Custom menu options
//                         </li>
//                         <li>
//                           <i className="fas fa-concierge-bell mr-2 text-amber-500"></i>
//                           Dedicated service
//                         </li>
//                         <li>
//                           <i className="fas fa-handshake mr-2 text-amber-500"></i>
//                           Business concierge
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                     <div className="bg-gray-50 p-6 rounded-lg">
//                       <h4 className="text-xl font-semibold text-gray-800 mb-4">
//                         Sample Menu
//                       </h4>
//                       <div className="space-y-4">
//                         <div>
//                           <h5 className="font-medium text-gray-700 mb-2">
//                             Executive Lunch
//                           </h5>
//                           <ul className="text-gray-600 space-y-1">
//                             <li>• Pan-seared Salmon with Quinoa</li>
//                             <li>• Grilled Chicken with Asparagus</li>
//                             <li>• Wagyu Beef Tenderloin</li>
//                             <li>• Vegetarian Buddha Bowl</li>
//                           </ul>
//                         </div>
//                         <div>
//                           <h5 className="font-medium text-gray-700 mb-2">
//                             Includes
//                           </h5>
//                           <ul className="text-gray-600 space-y-1">
//                             <li>• Artisan Bread Selection</li>
//                             <li>• Premium Coffee & Tea</li>
//                             <li>• Dessert Platter</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="bg-amber-50 p-6 rounded-lg">
//                       <h4 className="text-xl font-semibold text-amber-800 mb-4">
//                         Available Time Slots
//                       </h4>
//                       <div className="grid grid-cols-2 gap-3">
//                         <div className="bg-white p-3 rounded-lg text-center">
//                           <span className="block font-medium text-amber-600">
//                             Breakfast
//                           </span>
//                           <span className="text-sm text-gray-600">
//                             7:30 - 10:30 AM
//                           </span>
//                         </div>
//                         <div className="bg-white p-3 rounded-lg text-center">
//                           <span className="block font-medium text-amber-600">
//                             Lunch
//                           </span>
//                           <span className="text-sm text-gray-600">
//                             11:30 - 2:30 PM
//                           </span>
//                         </div>
//                         <div className="bg-white p-3 rounded-lg text-center">
//                           <span className="block font-medium text-amber-600">
//                             Afternoon
//                           </span>
//                           <span className="text-sm text-gray-600">
//                             3:00 - 5:00 PM
//                           </span>
//                         </div>
//                         <div className="bg-white p-3 rounded-lg text-center">
//                           <span className="block font-medium text-amber-600">
//                             Dinner
//                           </span>
//                           <span className="text-sm text-gray-600">
//                             6:00 - 9:00 PM
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <form id="businessDiningForm" className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Company Name
//                         </label>
//                         <input
//                           type="text"
//                           name="company"
//                           required
//                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Number of Guests
//                         </label>
//                         <input
//                           type="number"
//                           name="guests"
//                           min="4"
//                           max="20"
//                           required
//                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Preferred Date
//                         </label>
//                         <input
//                           type="date"
//                           name="date"
//                           required
//                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Preferred Time
//                         </label>
//                         <select
//                           name="time"
//                           required
//                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                         >
//                           <option value="">Select a time slot</option>
//                           <option value="breakfast">
//                             Breakfast (7:30 - 10:30 AM)
//                           </option>
//                           <option value="lunch">Lunch (11:30 - 2:30 PM)</option>
//                           <option value="afternoon">
//                             Afternoon (3:00 - 5:00 PM)
//                           </option>
//                           <option value="dinner">
//                             Dinner (6:00 - 9:00 PM)
//                           </option>
//                         </select>
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Special Requirements
//                       </label>
//                       <textarea
//                         name="requirements"
//                         maxLength={500}
//                         rows={4}
//                         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                       ></textarea>
//                     </div>
//                     <button
//                       type="submit"
//                       className="!rounded-button w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors"
//                     >
//                       Book Business Dining Space
//                     </button>
//                   </form>
//                 </div>
//               </div>
//               <div className="relative group overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 cursor-pointer">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
//                 <img
//                   src="https://readdy.ai/api/search-image?query=modern%20coffee%20bar%20setup%20with%20barista%20preparing%20artisanal%20coffee%20high%20end%20coffee%20machines%20and%20fresh%20pastries%20displayed%20elegant%20morning%20setup&width=400&height=300&seq=002&orientation=landscape"
//                   alt="Coffee Experience"
//                   className="w-full h-[200px] object-cover transform transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
//                   <h3 className="text-lg font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     Coffee Experience
//                   </h3>
//                   <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//                     Premium coffee & fresh pastries
//                   </p>
//                 </div>
//               </div>
//               <div className="relative group overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 cursor-pointer">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
//                 <img
//                   src="https://readdy.ai/api/search-image?query=gourmet%20lunch%20spread%20on%20modern%20wooden%20table%20fresh%20healthy%20food%20platters%20and%20innovative%20cuisine%20professional%20catering%20setup&width=400&height=300&seq=003&orientation=landscape"
//                   alt="Gourmet Experience"
//                   className="w-full h-[200px] object-cover transform transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
//                   <h3 className="text-lg font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     Gourmet Experience
//                   </h3>
//                   <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//                     Daily curated menus & specialties
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* Footer */}
//             <div className="mt-6 pt-6 border-t border-gray-600">
//               <p
//                 id="menuCompareTrigger"
//                 className="text-lg text-purple-400 font-medium cursor-pointer hover:text-purple-300 transition-colors"
//               >
//                 Some agencies offer free coffee. We offer a full-course
//                 experience.
//               </p>
//             </div>
//             {/* Menu Comparison Modal */}
//             <div
//               id="menuCompareModal"
//               className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center"
//             >
//               <div className="bg-white rounded-xl p-8 max-w-4xl w-full mx-4 relative">
//                 <button
//                   id="closeMenuModal"
//                   className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//                 >
//                   <i className="fas fa-times text-xl"></i>
//                 </button>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                   NAD's Full-Course Experience
//                 </h3>
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse mb-6">
//                     <thead>
//                       <tr className="bg-gray-50">
//                         <th className="p-4 text-left border-b-2 border-gray-200">
//                           Offerings
//                         </th>
//                         <th className="p-4 text-left border-b-2 border-gray-200">
//                           Standard Agency
//                         </th>
//                         <th className="p-4 text-left border-b-2 border-gray-200">
//                           NAD Experience
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="p-4 border-b border-gray-100 font-medium">
//                           Coffee Service
//                         </td>
//                         <td className="p-4 border-b border-gray-100">
//                           Basic coffee machine
//                         </td>
//                         <td className="p-4 border-b border-gray-100 text-amber-600">
//                           <i className="fas fa-star mr-2"></i>
//                           Premium coffee bar + Barista
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="p-4 border-b border-gray-100 font-medium">
//                           Morning Options
//                         </td>
//                         <td className="p-4 border-b border-gray-100">
//                           Packaged snacks
//                         </td>
//                         <td className="p-4 border-b border-gray-100 text-amber-600">
//                           <i className="fas fa-star mr-2"></i>
//                           Fresh pastries & fruit bar
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="p-4 border-b border-gray-100 font-medium">
//                           Lunch Program
//                         </td>
//                         <td className="p-4 border-b border-gray-100">
//                           Optional ordering
//                         </td>
//                         <td className="p-4 border-b border-gray-100 text-amber-600">
//                           <i className="fas fa-star mr-2"></i>
//                           Curated daily menus
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="p-4 border-b border-gray-100 font-medium">
//                           Special Events
//                         </td>
//                         <td className="p-4 border-b border-gray-100">
//                           Quarterly gatherings
//                         </td>
//                         <td className="p-4 border-b border-gray-100 text-amber-600">
//                           <i className="fas fa-star mr-2"></i>
//                           Weekly tastings & monthly chef events
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div className="bg-amber-50 p-4 rounded-lg">
//                     <h4 className="text-lg font-semibold text-amber-700 mb-3">
//                       Daily Menu Highlights
//                     </h4>
//                     <ul className="space-y-2 text-gray-600">
//                       <li>
//                         <i className="fas fa-utensils mr-2 text-amber-500"></i>
//                         Artisanal Breakfast Station
//                       </li>
//                       <li>
//                         <i className="fas fa-coffee mr-2 text-amber-500"></i>
//                         Specialty Coffee Bar
//                       </li>
//                       <li>
//                         <i className="fas fa-apple-alt mr-2 text-amber-500"></i>
//                         Fresh Fruit & Smoothies
//                       </li>
//                       <li>
//                         <i className="fas fa-bread-slice mr-2 text-amber-500"></i>
//                         Gourmet Lunch Options
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="bg-purple-50 p-4 rounded-lg">
//                     <h4 className="text-lg font-semibold text-purple-700 mb-3">
//                       Special Events
//                     </h4>
//                     <ul className="space-y-2 text-gray-600">
//                       <li>
//                         <i className="fas fa-glass-cheers mr-2 text-purple-500"></i>
//                         Wine Tasting Thursdays
//                       </li>
//                       <li>
//                         <i className="fas fa-hat-chef mr-2 text-purple-500"></i>
//                         Monthly Chef Showcases
//                       </li>
//                       <li>
//                         <i className="fas fa-globe mr-2 text-purple-500"></i>
//                         International Food Festivals
//                       </li>
//                       <li>
//                         <i className="fas fa-users mr-2 text-purple-500"></i>
//                         Team Cooking Workshops
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <button
//                   id="scheduleTastingBtn"
//                   className="!rounded-button w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
//                 >
//                   Schedule a Tasting Tour
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default FoodCul;
