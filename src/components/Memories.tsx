// src/components/Memories.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Memories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Any effects can be added here
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-100 to-yellow-100 overflow-hidden animate-fade-in">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-2xl text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-6">
          happy anniversary meri jaan
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          i love you so much meri jaan apke liye meri creativity khabhi rukne nahi wali muaah in 5 saalo me apne mujhe bohot kuch sikhaya hai mera sath nibhaya hai yh years bohot precious hai 
          mere liye khaskar 2024 ke 18,19,20dec jha apke b day wale din hamari firts official date hui hehe kuch months me hum ek dusre se dur bhi rahey lekin humney ek dusree ka sath nahi
          chora apne apni new life shuru kri clg ki jha mujhe drr tha ki aap mereko kahi peechy to nahi chor doge lekin aisa nahi ua ap mujhe apne sath lekr chaley har samay or har waqt
          mujhe maaf me apke sath time spend nahi kr paya aj ke special din k liye but i promise u me apka har ek din special banayunga aaj hi nhi future me bhi bs aap mera sath kabhi mahi chrona 
          apke gussey me bhi pyar hai sweetheart apke liye jitna kahu utna kum hai sach me bs mere banker rehna wifeey mereko or kuch nahi chahiye i love u sooo muchh sweetheart muaaahhhh 
          aap mujhe alag alag ways me repsect dete ho or meri baato ko smjhty bhi ho apne meri mushkilo me mera har waqt sath dia even jb ghr pr akela tha apne raat raat bhar vc krke mujhe
          apne pass hone ka ehsas dilaya apne mujhe ghr ka kaam sikhaya khana banana sikhaya apne or ek baat batau khana banana me or maja ata hai apke sath sach me bohot sari memories hai wiffey 
          likhta rha to meri website hang ho jayegi lekin meri bkwas khatam ni hogi kabhi hehe     
        </p>
        <button
          onClick={() => navigate('/timeline')}
          className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full hover:from-pink-500 hover:to-purple-500 transition-transform transform hover:scale-105 shadow-lg font-semibold"
        >
          muaaah 🎉
        </button>
      </div>

      {/* Inline CSS for fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Memories;
