const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Mảng để lưu trữ thông tin người dùng đã đăng ký
const registeredUsers = [
  {
    username: 'admin',
    password: 'admin',
  },
];

// Endpoint đăng ký
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra xem tên đăng nhập đã tồn tại chưa
  if (registeredUsers.some(user => user.username === username)) {
    return res.status(400).json({ message: 'Tên đăng nhập đã tồn tại' });
  }

  // Lưu thông tin người dùng
  registeredUsers.push({ username, password });

  // Trả về thông báo đăng ký thành công
  res.json({ message: 'Đăng ký thành công' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
