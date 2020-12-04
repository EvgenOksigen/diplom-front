import React from "react";
import { Form, Field, reduxForm } from "redux-form";
import Input from "../../components/FormsComponent/Input/Input";
import Select from "../../components/FormsComponent/Select/Select";
import TextArea from "../../components/FormsComponent/TextArea/TextArea";
import { connect } from "react-redux";
import { compose } from "redux";
import "./AddCourse.scss";
import api from "../../../api";
import FUploaderMulter from "../../components/FormsComponent/FileUploader/fUploaderMulter";

const AddCourse = () => {
  //
  const formSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Рабочая программа учебной дисциплины</h1>
      <br />
      <Form autoComplete="off" className="create-course" onSubmit={formSubmit}>
        <div className="create-course-left">
          <h4>Общее</h4>
          <Field
            label="Название учебного курса"
            name="course_name"
            component={Input}
            type="text"
            placeholder="Название "
          />
          <Field
            label="Описание учебного курса"
            name="course_description"
            component={Input}
            type="text"
            placeholder="Описание "
          />
          <Field
            label="Кафедра"
            name="department"
            component={Select}
            placeholder="Выберите кафедру"
            options={[
              {
                text: "Student",
                value: "student"
              },
              {
                text: "Admin",
                value: "admin"
              },
              {
                text: "Teacher",
                value: "teacher"
              }
            ]}
            defaultValue={"student"}
          />
          <br />
          <h4>Описание учебной дисциплины</h4>
          <Field
            label="Семестр"
            name="term"
            component={Select}
            placeholder="Выберите Семестр"
            options={[
              {
                text: "Autumn - Spring ",
                value: "first"
              },
              {
                text: "Spring - Summer",
                value: "second"
              }
            ]}
            defaultValue={"winter"}
          />
          <Field
            label="Количество модулей"
            name="number_of_modules"
            component={Input}
            type="text"
            placeholder="Количество модулей "
          />
          <Field
            label="Количество кредитов"
            name="credits"
            component={Input}
            type="text"
            placeholder="Количество кредитов "
          />
        </div>

        <div className="create-course-right">
          <h4>Характеристика учебной дисциплины</h4>
          <Field
            label="Количество лаб"
            name="number_of_labs"
            component={Input}
            type="text"
            placeholder="Количество лаб "
          />
          <Field
            label="Количество лекций"
            name="number_of_lectures"
            component={Input}
            type="text"
            placeholder="Количество лекций "
          />
          <Field
            label="Количество практик"
            name="number_of_practice"
            component={Input}
            type="text"
            placeholder="Количество практик "
          />
          <Field
            label="Период"
            name="study_year"
            component={Select}
            placeholder="Выберите учебный год"
            options={[
              {
                text: "2019/2020",
                value: "2019/2020"
              },
              {
                text: "2020/2021",
                value: "2020/2021"
              }
            ]}
            defaultValue={"2019/2020"}
          />
          <Field
            label="Индивидуальное задание"
            name="personal_task"
            component={Select}
            placeholder="Выберите учебный год"
            options={[
              {
                text: "Расчетная работа",
                value: "rr-work"
              },
              {
                text: "Расчетно-графическая работа",
                value: "rgr-work"
              }
            ]}
            defaultValue={"rr-work"}
          />
          <Field
            label="Загрузите лабораторные"
            name="labs"
            component={FUploaderMulter}
            // uploadReq={api.attachment.upload}
            value={null}
            multiple
          />
          <Field
            label="Загрузите модули"
            name="modules"
            component={FUploaderMulter}
            // uploadReq={api.attachment.upload}
            multiple
          />
        </div>

        <div className="create-course-center">
          <div className="goal-container">
            <h3>Цель и задание дисциплины</h3>
            <div className="flex-row sb">
              <div className="flex-col">
                <Field
                  label="Задание"
                  name="number_of_labs"
                  component={Input}
                  type="text"
                  placeholder="Введите задачу курса "
                />
              </div>
              <div className="flex-col">
                <Field
                  label="Цель"
                  name="goal_of_course"
                  component={Input}
                  type="text"
                  placeholder="Введите цель курса"
                />
              </div>
            </div>
            <br />
            <h3>Результаты обучения</h3>
            <Field
              label="Знать"
              name="will_know"
              component={Input}
              type="text"
              placeholder="Будет знать"
            />
            <Field
              label="Уметь"
              name="will_can"
              component={Input}
              type="text"
              placeholder="Будет уметь"
            />
            <Field
              label="Иметь представление"
              name="will_have_a_view"
              component={TextArea}
              type="text"
              placeholder="Иметь представление"
            />
          </div>
          <div className="form-footer">
            <button type="submit"> Save/Create</button>
          </div>
        </div>
        {/* <Field />*/}
        {/* <Field />*/}
        {/* <Field />*/}
        {/* <Field />*/}
      </Form>
    </>
  );
};
const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "create" })
);

export default enhance(AddCourse);
