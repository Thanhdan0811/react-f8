# SPA/MPA.

# React.createElement()

- React.createElement(type, props, children, n) trả về object là React element là thành phần nhỏ nhất.
- children thực chất cũng là props.

- Cần có babel để thực thi jsx.

# React element Types

- sẽ có các types : string, funciton/class
-

# Tìm hiểu kỹ props.

props mà ko gán giá trị thì mặc định sẽ là true.

# Cài react webpack babel

- npm install webpack webpack-cli --save-dev
- npm install react@17.0.2 react-dom@17.0.2 --save
- npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

  - babel-core: Chuyển đổi ES6 về ES5
  - babel-loader: Cho phép chuyển các files Javascript sử dụng Babel & Webpack
  - babel-preset-env: Cài đặt sẵn giúp bạn sử dụng Javascript mới nhất trên nhiều môi trường khác nhau (nhiều trình duyệt khác nhau). Gói này đơn giản là support truyển đổi ES6, ES7, ES8, ES… về ES5.
  - babel-preset-react: Hỗ trợ chuyển đổi JSX về Javascript

- npm install css-loader style-loader --save-dev
- npm install html-webpack-plugin --save-dev
- npm install webpack-dev-server --save-dev
- // "start": "webpack --mode development --watch",

# Update lastest
web pwa


# React HOOKS
- 