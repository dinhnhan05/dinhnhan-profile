import React from 'react';
import Avatar from './components/Avatar';
import Bio from './components/Bio';
import LinkBox from './components/LinkBox';
import './style.css'; // Import tệp CSS

const yourName = "Nguyễn Đình Nhân";

function App() {
  const avatarImage = 'https://i.imgur.com/4UBZZTg.jpg ';
  const bioDescription = '@dinh_nhan ';
    // src/App.jsx

// ...
const links = [
  { title: 'Facebook', url: 'https://www.facebook.com/DiinhNhan?mibextid=ZbWKwL ', logo: 'https://i.imgur.com/oJf8VOS.png ' },
  { title: 'Github', url: 'https://github.com/dinhnhan05', logo: 'https://i.imgur.com/YTxdfq1.png ' },
  { title: 'Telegram', url: 'https://t.me/nhannhanzz ', logo: 'https://i.imgur.com/SgwhPnd.png ' },
{ title: 'Instagram', url: 'https://www.instagram.com/nhannguyen19122005/ ', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png ' },

  // Thêm các liên kết khác với hình logo ở đây
];
// ...


  return (
    <div className="bio-link">
      <Avatar imageUrl={avatarImage} />
      <Bio name={yourName} />

      <Bio description={bioDescription} />
      <LinkBox links={links} />
    </div>
  );
}

export default App;

