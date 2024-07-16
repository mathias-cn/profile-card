import React from "react";
import { Description } from "./components/description";
import ColorToggleButton from "./components/language-toggle-button";

export function ProfileCard() {
  const [language, setLanguage] = React.useState('en');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setLanguage(newAlignment);
  };

  return (
    <div className="w-[380px] border-[1px] border-blue-900 p-3 rounded-2xl bg-blue-50 space-y-4">
      <div className="w-full aspect-video bg-[url('/profile-card-pic.jpg')] bg-cover rounded-2xl relative">
        <ColorToggleButton
          language={language}
          handleChange={handleChange}
          setLanguage={setLanguage}
        />
      </div>

      <Description 
        language={language}
      />
    </div>
  )
}