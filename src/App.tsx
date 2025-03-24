import { useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { Geolocation } from '@capacitor/geolocation';
import './App.css';

const App = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  const convertTemperature = () => {
    const f = (parseFloat(celsius) * 9/5) + 32;
    setFahrenheit(f.toFixed(2));
    sendNotification(f.toFixed(2));
  };

  const sendNotification = async (temp: string) => {
    await LocalNotifications.schedule({
      notifications: [{
        title: "Chuyển đổi hoàn tất",
        body: `Nhiệt độ: ${temp}°F`,
        id: 1
      }]
    });
  };

  const shareResult = async () => {
    if (fahrenheit) {
      await Share.share({
        title: "Kết quả chuyển đổi nhiệt độ",
        text: `Nhiệt độ: ${fahrenheit}°F`,
        dialogTitle: "Chia sẻ nhiệt độ"
      });
    }
  };

  const getLocation = async () => {
    try {
      const permStatus = await Geolocation.checkPermissions();
      if (permStatus.location !== 'granted') {
        const request = await Geolocation.requestPermissions();
        if (request.location !== 'granted') {
          alert("Bạn cần cấp quyền vị trí để sử dụng tính năng này.");
          return;
        }
      }
      const coordinates = await Geolocation.getCurrentPosition();
      setLocation(`Lat: ${coordinates.coords.latitude}, Lng: ${coordinates.coords.longitude}`);
    } catch (error) {
      alert("Không thể lấy vị trí. Vui lòng thử lại!");
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>Chuyển đổi nhiệt độ</h1>
      <input 
        type="number" 
        value={celsius} 
        onChange={(e) => setCelsius(e.target.value)} 
        placeholder="Nhập nhiệt độ °C"
      />
      <button onClick={convertTemperature}>Chuyển đổi</button>
      {fahrenheit && <p>Kết quả: {fahrenheit}°F</p>}
      <button onClick={shareResult}>Chia sẻ</button>
      <button onClick={getLocation}>Lấy vị trí hiện tại</button>
      {location && <p>Vị trí của bạn: {location}</p>}
    </div>
  );
};

export default App;
