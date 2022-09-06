для запуска проекта
npm i
npm start
нажать кнопку a(ф)
сканировать qr в приложении 'Expo Go'

о приложении :
придерживался чистых компoнент . логика происходить в контейнерных (nameContainer.jsx)
отрисовка карточек:
в navigation=>navigation - запросы на сервер и первая сортировка массивов , затем данные отправляются в redux (store=>slices=>cardsSlice). в cardsSlice происходит "сжатие" масивов до 10 . затем переходим в components=>cards=>cardsContainer.jsx, с помощью хука useSelector достаем из редакса "сжатые" массивы , объеденяем в единый и отрисовываем его .
имитация авторизации:
в store=>slices=>authSlicе лежит состояние о текущей авторизованности (isAuth) . она используется в components => autorization => autorizationContainer.jsx для валидации форм. там же реализован переход на страницу 'Карты' . переходим components => header => headerContainer.jsx . здесь достается состояние isAuth и по условию отрисовывается . кнопка в components => header => headrExit представляет из себя текст с opacity = 0 , position = absolute и шириной с высотой размером , который соответствует каринке

использовал: redex-toolkit , axios , react-navigation ,styled-components
