import React from "react";

const Mobile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-gray-100">
      <div className="w-100 ml-2 mr-2 bg-white shadow-lg rounded-lg p-4 flex flex-row items-center border border-gray-200">
        {/* Avatar bên trái */}
        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
          <span>Avatar</span>
        </div>

        {/* Thông tin bên phải */}
        <div className="ml-4">
          <h2 className="text-lg font-bold text-gray-800">Thắng Liêm</h2>
          <p className="text-gray-600 text-sm">📅 Ngày sinh: 01/01/2000</p>
          <p className="text-gray-600 text-sm">📞 0123-456-789</p>
          <p className="text-gray-600 text-sm">🏠 TP. Hồ Chí Minh</p>
          <p className="text-gray-600 text-sm">✉️ email@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
