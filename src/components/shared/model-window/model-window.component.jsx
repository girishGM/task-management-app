import React, { useState } from "react";
import "./model-window.styles.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import taskStore from "../../../store/task-store";
import toastStore from "../../../store/toast-store";

export const ModelWindow = (props) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [title, setTitle] = useState("");

  const addTask = (title) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("access-token"),
      },
      body: JSON.stringify({ title: title, completed: false }),
    };
    fetch(process.env.REACT_APP_TASK_SERVICE_API_URL + "/tasks", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.result && res._status.code === 8001) {
          let task = res.result;
          let taskList = taskStore.taskList;
          taskList.unshift(task);
          taskStore.updateTask(taskList);
          let totalTask = taskStore.totalTask;
          taskStore.updateTaskCount(++totalTask, taskStore.completedTask);
          toastStore.showToastMessage(
            res._status.message,
            "success",
            Date.now()
          );
        } else {
          toastStore.showToastMessage(res._status.message, "error", Date.now());
        }
      });
  };

  return (
    <div style={{ display: "inline-block" }}>
      <button className="button-new" onClick={onOpenModal}>
        {props.buttonText}
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="custom-model">
          <h5 style={{ textAlign: "left" }}>{props.modelHeading} </h5>
          <div className="model-text" style={{ padding: "10px" }}>
            <input
              type="text"
              name="title"
              onChange={(event) => setTitle(event.target.value)}
            ></input>
          </div>
          <div style={{ alignItems: "center", marginTop: "5px" }}>
            <button
              className="button-new"
              disabled={!title}
              onClick={() => {
                onCloseModal();
                addTask(title);
              }}
            >
              {props.modelHeading}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
