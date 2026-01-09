let all_students = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"];
let present_students = ["정연", "모모", "채영", "쯔위", "사나", "나연", "미나", "다현"];

function getAbsentStudent(all_array, present_array) {
  const studentMap = new Map();
  for (let presentStudent of present_array) {
    studentMap.set(presentStudent, true);
  }

  for (let allStudent of all_array) {
    if (!studentMap.has(allStudent)) {
      return allStudent;
    }
  }
}

console.log(getAbsentStudent(all_students, present_students));

console.log(
  "정답 = 예지 / 현재 풀이 값 = ",
  getAbsentStudent(["류진", "예지", "채령", "리아", "유나"], ["리아", "류진", "채령", "유나"])
);
console.log(
  "정답 = RM / 현재 풀이 값 = ",
  getAbsentStudent(["정국", "진", "뷔", "슈가", "지민", "RM"], ["뷔", "정국", "지민", "진", "슈가"])
);
