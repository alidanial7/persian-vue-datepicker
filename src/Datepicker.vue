<template>
  <div>
    <div id="main">
      <input
        id="input"
        v-model="selectedInInput"
        @keyup="keyPressed"
        @focus="show = true"
        maxlength="10"
      />
      <div id="picker" v-if="show">
        <div id="header">
          <button @click="previousMonth">-</button>

          {{
            `${monthNames[this.selected.month - 1]} - ${this.selected.year} `
          }}
          <button @click="nextMonth">+</button>
        </div>
        <hr />
        <div id="body">
          <div id="dayNames">
            <div class="dayName">ش</div>
            <div class="dayName">1ش</div>
            <div class="dayName">2ش</div>
            <div class="dayName">3ش</div>
            <div class="dayName">4ش</div>
            <div class="dayName">5ش</div>
            <div class="dayName">ج</div>
          </div>
          <div
            class="day-void"
            v-for="i in firstDayOfMonth"
            :key="`day-void ${i}`"
          ></div>
          <div
            class="day"
            :class="i === selected.day ? 'active' : ''"
            v-for="i in howManyDaysInCurrentMonth"
            :key="`day ${i}`"
            @click="mouseClickOnCalender(i)"
          >
            {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JDate from "jalali-date";
export default {
  name: "Picker",
  data() {
    return {
      show: false,
      selected: {
        day: "",
        month: "",
        year: "",
      },
      firstDayOfMonth: 0,
      selectedInInput: "",
      howManyDaysInCurrentMonth: 0,

      monthNames: [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
      ],
    };
  },
  mounted() {
    this.calcStartParams();
  },
  methods: {
    calcStartParams() {
      const date = new JDate(); // => default to today
      const now = date.date;
      this.selected.day = now[2];
      this.selected.month = now[1];
      this.selected.year = now[0];
      const firstDayOfMonth = new JDate(now[0], now[1], 1).format("ddd");
      switch (firstDayOfMonth) {
        case "شنبه":
          this.firstDayOfMonth = 0;
          break;
        case "یکشنبه":
          this.firstDayOfMonth = 1;
          break;
        case "دوشنبه":
          this.firstDayOfMonth = 2;
          break;
        case "سه‌شنبه":
          this.firstDayOfMonth = 3;
          break;
        case "چهارشنبه":
          this.firstDayOfMonth = 4;
          break;
        case "پنج‌شنبه":
          this.firstDayOfMonth = 5;
          break;
        case "جمعه":
          this.firstDayOfMonth = 6;
          break;

        default:
          break;
      }
      this.calcDays();
    },
    calcDays() {
      this.howManyDaysInCurrentMonth = JDate.daysInMonth(
        this.selected.year,
        this.selected.month
      );
      const firstDayOfMonth = new JDate(
        this.selected.year,
        this.selected.month,
        1
      ).format("ddd");
      switch (firstDayOfMonth) {
        case "شنبه":
          this.firstDayOfMonth = 0;
          break;
        case "یکشنبه":
          this.firstDayOfMonth = 1;
          break;
        case "دوشنبه":
          this.firstDayOfMonth = 2;
          break;
        case "سه‌شنبه":
          this.firstDayOfMonth = 3;
          break;
        case "چهارشنبه":
          this.firstDayOfMonth = 4;
          break;
        case "پنج‌شنبه":
          this.firstDayOfMonth = 5;
          break;
        case "جمعه":
          this.firstDayOfMonth = 6;
          break;

        default:
          break;
      }
    },
    nextMonth() {
      this.selected.month++;
      if (this.selected.month > 12) {
        this.selected.year++;
        this.selected.month = 1;
      }
      this.calcDays();
    },
    previousMonth() {
      this.selected.month--;
      if (this.selected.month < 1) {
        this.selected.year--;
        this.selected.month = 12;
      }
      this.calcDays();
    },
    isLeapYear(year) {
      return ((((year - 474) % 2820) + 512) * 682) % 2816 < 682;
    },
    keyPressed(event) {
      switch (event.key) {
        case "ArrowLeft":
          this.selected.day++;
          if (this.selected.day > this.howManyDaysInCurrentMonth) {
            this.selected.day = 1;
            this.selected.month++;
            if (this.selected.month > 12) {
              this.selected.year++;
              this.selected.month++;
            }
          }
          break;
        case "ArrowRight":
          this.selected.day--;
          if (this.selected.day < 1) {
            if (this.selected.month === 1) {
              this.selected.year--;
              this.selected.month = 12;
              if (JDate.isLeapYear(this.selected.year)) {
                this.selected.day = 30;
              } else {
                this.selected.day = 29;
              }
            } else if (this.selected.month < 7) {
              this.selected.month--;
              this.selected.day = 31;
            } else {
              this.selected.month--;
              this.selected.day = 30;
            }
            // this.selected.month--;
          }
          break;
        case "ArrowUp":
          this.selected.day -= 7;
          if (this.selected.day < 1) {
            this.selected.month--;
            this.selected.day = 1;
            if (this.selected.month < 1) {
              this.selected.year--;
              this.selected.month = 12;
            }
          }
          break;
        case "ArrowDown":
          this.selected.day += 7;
          if (this.selected.day > this.howManyDaysInCurrentMonth) {
            this.selected.month++;
            this.selected.day = 1;
            if (this.selected.month > 12) {
              this.selected.year++;
              this.selected.month = 1;
            }
          }
          break;
        case "a":
          this.monthPlus();
          this.clearLastChar();
          break;
        case "d":
          this.monthMinus();
          this.clearLastChar();
          break;
        case "w":
          this.yearPlus();
          this.clearLastChar();
          break;
        case "s":
          this.yearMinus();
          this.clearLastChar();
          break;
        case "Enter":
          this.addNumberToInput();
          break;
        default:
          this.calFocused(event.key);
          break;
      }
      this.calcDays();
    },
    mouseClickOnCalender(i) {
      this.selected.day = i;
      this.addNumberToInput();
    },
    addNumberToInput() {
      let day = parseInt(this.selected.day);
      let month = parseInt(this.selected.month);
      let year = parseInt(this.selected.year);
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
      this.selectedInInput = `${year}/${month}/${day}`;

      this.show = false;
    },
    calFocused(key) {
      if (
        this.selectedInInput[this.selectedInInput.length - 2] === "/" &&
        key === "/"
      ) {
        this.clearLastChar();
      } else if (
        key in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ||
        key === "/" ||
        key === "Backspace"
      ) {
        const selectedDate = this.selectedInInput.split("/");
        if (selectedDate.length === 3) {
          this.selected.day = parseInt(selectedDate[2]);
          this.selected.month = selectedDate[1];
          this.selected.year = selectedDate[0];
        }
        this.calcDays();
      } else {
        this.clearInput();
      }
    },
    monthPlus() {
      this.selected.day = 1;
      this.selected.month++;
      if (this.selected.month == 13) {
        this.selected.year++;
        this.selected.month = 1;
      }
      this.calcDays();
    },
    monthMinus() {
      this.selected.day = 1;
      this.selected.month--;
      if (this.selected.month == 0) {
        this.selected.year--;
        this.selected.month = 12;
      }
      this.calcDays();
    },
    yearPlus() {
      this.selected.day = 1;
      this.selected.year++;
      this.calcDays();
    },
    yearMinus() {
      this.selected.day = 1;
      this.selected.year--;
      this.calcDays();
    },
    closePicker() {
      this.show = false;
    },
    clearLastChar() {
      this.selectedInInput = this.selectedInInput.slice(
        0,
        this.selectedInInput.length - 1
      );
    },
    clearInput() {
      this.selectedInInput = "";
    },
  },
};
</script>
<style scoped>
* {
  direction: rtl;
}
#main {
  width: 80%;
}
#input {
  width: 100%;
}
#picker {
  border: 1px solid gray;
  width: 350px;
}
#body {
  display: flex;
  flex-wrap: wrap;
}

#dayNames {
  display: flex;
  flex-wrap: wrap;
  background: gray;
  color: white;
}
.day {
  width: 50px;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
}
.day-void {
  width: 50px;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.dayName {
  width: 50px;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.day:hover {
  background: blue;
}
.active {
  background: red;
}
</style>
