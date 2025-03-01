const Forms = () => {
  return (
    <div className="content">
      <h1>Формы</h1>
      <p>
        Чаще всего для работы с формами используются библиотеки React Hook Form
        и Formik. Чтобы их использовать:
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`//1. Импорт библиотеки
npm install react-hook-form

//2. Инициализация хука useForm() внутри  функциональной компоненты
const { register, handleSubmit, formState: { errors } } = useForm()

//3. Создание формы 
<form onSubmit={handleSubmit(onSubmit)}>
  {/* Поля формы */}
</form>

//4. Добавление полей
<input {...register('name')} />

//5. Валидация
<input
  type='number'
  {...register('age', {
    required: 'Обязательное поле',
    min: {
     value: 18,
     message: 'Вам должно быть 18 лет или больше'
    }
   })}
 />
<p>{errors.age?.message}</p>

//6. Обработка отправки
const onSubmit = (data) => {
  console.log(data);
};

//7. Кнопка отправки (связанная с handleSubmit)
<button type="submit">Отправить</button>
`}
          </code>
        </pre>
      </div>
      <h2>Пример формы с использованием React Hook Form</h2>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, DatePicker, Radio } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { ModalWindow } from "./ModalWindow";

const RegistrationForm = () => {
  const {
    control,
    watch,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const password = watch("password");

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const [modalActive, setModalActive] = useState(false);

  const onSubmit = () => {
    setModalActive(true);
  };

  const handleReset = () => {
    reset();
    setModalActive(false);
  };

  console.log(modalActive);

  return (
    <form className="formRegistration" onSubmit={handleSubmit(onSubmit)}>
      <h1>Форма регистрации</h1>

      <Controller
        name="name"
        control={control}
        rules={{ required: "Имя должно быть заполнено" }}
        render={({ field }) => (
          <Input
            {...field}
            className="formEl"
            type="text"
            placeholder="Введите имя"
          />
        )}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email должен быть заполнен",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/,
            message: "Email введен некорректно",
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            className="formEl"
            type="email"
            placeholder="Введите Email"
          />
        )}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Пароль должен быть введен",
          validate: {
            length: (value) =>
              value.length > 5 || "Длина должна быть 5 и более символов",
            upLetter: (value) =>
              value !== value.toLowerCase() ||
              "Должна быть хоть 1 заглавная буква",
          },
        }}
        render={({ field }) => (
          <Input.Password
            {...field}
            className="formEl"
            placeholder="Введите пароль"
            iconRender={(visible) =>
              visible ? (
                <EyeOutlined onClick={toggleVisibility} />
              ) : (
                <EyeInvisibleOutlined onClick={toggleVisibility} />
              )
            }
          />
        )}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <Controller
        name="repeatPass"
        control={control}
        rules={{
          required: "Поле не заполнено",
          validate: {
            comparePass: (value) => password === value || "Пароли не совпадают",
          },
        }}
        render={({ field }) => (
          <Input.Password
            {...field}
            className="formEl"
            placeholder="Введите пароль"
            iconRender={(visible) =>
              visible ? (
                <EyeOutlined onClick={toggleVisibility} />
              ) : (
                <EyeInvisibleOutlined onClick={toggleVisibility} />
              )
            }
          />
        )}
      />
      {errors.repeatPass && <p>{errors.repeatPass.message}</p>}

      <Controller
        name="birthday"
        control={control}
        rules={{
          required: "Дата рождения не выбрана",
        }}
        render={({ field }) => (
          <DatePicker
            className="formEl"
            {...field}
            placeholder="Дата рождения"
          />
        )}
      />
      {errors.birthday && <p>{errors.birthday.message}</p>}

      <Controller
        name="gender"
        control={control}
        rules={{
          required: "Выберите пол",
        }}
        render={({ field }) => (
          <Radio.Group {...field} className="formEl">
            <Radio value={"male"}>Мужской</Radio>
            <Radio value={"female"}>Женский</Radio>
          </Radio.Group>
        )}
      />
      {errors.gender && <p>{errors.gender.message}</p>}

      <Controller
        name="telephon"
        control={control}
        rules={{
          required: "Телефон должен быть заполнен",
          validate: {
            chekNumber: (value) =>
              /^[0-9]/.test(value) || "Введите только цифры",
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            className="formEl"
            type="text"
            placeholder="Введите телефон"
          />
        )}
      />
      {errors.telephon && <p>{errors.telephon.message}</p>}

      <Button className="formEl" htmlType="submit" disabled={!isValid}>
        Зарегестрироваться
      </Button>
      <ModalWindow active={modalActive} dataPerson={getValues()} />
      <Button className="formEl" type="button" onClick={handleReset}>
        Сброс
      </Button>
    </form>
  );
};

export { RegistrationForm };

`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export { Forms };
