import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getSlots, addSlotToStorage } from "./helper/coreapicalls";
import { Link, withRouter } from "react-router-dom";

const Home = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState("");

  const loadAllSlots = () => {
    getSlots(
      `${appointmentDate.getYear() + 1900}-${(
        "0" +
        (appointmentDate.getMonth() + 1)
      ).slice(-2)}-${("0" + appointmentDate.getDate()).slice(-2)}`
    ).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        let slotTemp = [
          { time: "9", available: true },
          { time: "10", available: true },
          { time: "11", available: true },
          { time: "12", available: true },
          { time: "1", available: true },
          { time: "2", available: true },
          { time: "3", available: true },
          { time: "4", available: true },
        ];
        setSlots(
          slotTemp.map((s) => {
            for (const item of data) {
              if (s.time === item.slotTime) {
                s.available = false;
              }
            }
            return s;
          })
        );
      }
    });
  };

  useEffect(() => {
    loadAllSlots();
  }, [appointmentDate]);

  const slotsList = () => {
    return (
      <div class="list-group">
        {slots.map((slot) => {
          if (slot.available) {
            return (
              <Link
                to="/schedule"
                class="list-group-item list-group-item-action"
                onClick={() => {
                  addSlotToStorage(
                    {
                      slotTime: slot.time,
                      slotDate: `${appointmentDate.getYear() + 1900}-${(
                        "0" +
                        (appointmentDate.getMonth() + 1)
                      ).slice(-2)}-${("0" + appointmentDate.getDate()).slice(-2)}`,
                    }
                  );
                }}
              >
                {slot.time}
              </Link>
            );
          } else {
            return (
              <Link
                to="/schedule"
                class="list-group-item list-group-item-action bg-warning disabled"
                tabindex="-1"
                aria-disabled="true"
              >
                {slot.time}
              </Link>
            );
          }
        })}
      </div>
    );
  };

  return (
    <Base
      title="Appointment Scheduler"
      desciption="A MERN Stack based Appointment Scheduler application."
      className="container"
    >
      <div className="row text-center">
        <div class="card text-center">
          <div class="card-header">Select A Date</div>
          <div class="card-body">
            <div ClassName="row">
              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                isClearable
                placeholderText="I have been cleared!"
              />
            </div>
            {slotsList()}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
