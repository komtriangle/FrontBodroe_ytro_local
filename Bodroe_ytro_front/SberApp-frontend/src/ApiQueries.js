import axios from "axios";

const API_URL = "https://bodroe-ytro-3003.herokuapp.com/";
async function createSberId(SberId) {
  const { data: newSberId } = await axios.post(`${API_URL}SberId/`, {
    SberId,
  });
  return newSberId;
}

async function createUser(UserId) {
  //alert(UserId)
  const { data: newUser } = await axios.post(`${API_URL}User/`
  , {
    headers: {'Access-Control-Allow-Origin': '*'},
    UserId: UserId,
    SberId: 0,
    Name: "",
    Age: 0,
    Gender: "",
    Active: 0,
  });
  return newUser;
}

async function getUsersBySberId(SberId) {
  const users = await axios.get(`${API_URL}User/`, {
    params: {
      SberId: SberId,
    },
  });
  return users;
}

async function createCategoryExercises(CategoryName) {
  const { data: newCategory } = await axios.post(`${API_URL}ExCateg/`, {
    CategoryName,
  });
  return newCategory;
}

async function getAllCategoriesExirc() {
  const categories = await axios.get(`${API_URL}ExCateg/`);
  return categories;
}
async function getCategoryById(CategoryId) {
  const category = await axios.get(`${API_URL}ExCateg/`, {
    params: {
      Id: CategoryId,
    },
  });
  return category;
}
async function getAllGroupsExercises() {
  const groups = await axios.get(`${API_URL}AllGroupsExercises/`);
  return groups;
}
async function getExircicesfromGroup(GroupId) {
  const exircises = await axios.get(`${API_URL}ExircicesfromGroup/`, {
    params: {
      group_id: GroupId,
    },
  });
  return exircises;
}

async function createProgressAchieve(UserId, date, Completed) {
  const { data: newProgress } = axios.post(`${API_URL}ProgressAchieve/`, 
  {
    UserId: UserId,
    Date: date,
    Completed: true,
  });
  return newProgress;
}

async function getProgressByUser(UserId) {
  const progress = axios.get(`${API_URL}ProgressByUser/`, {
    params: {
      user_id: UserId,
    },
  });
  return progress;
}

async function getMotivationalPhrase() {
  const Phrase = axios.get(`${API_URL}Phrase/`);
  return Phrase;
}

async function updateQuestion(id, payload) {
  const { data: newQuestion } = await axios.put(`${API_URL}${id}`, payload);
  return newQuestion;
}
async function getAchiviesFomUser(UserId) {
  const ach = axios.get(`${API_URL}AchiviesFomUser/`, {
    params: {
      user_id: UserId,
    },
  });
  return ach;
}
export default {
  API_URL,
  getAllGroupsExercises,
  getExircicesfromGroup,
  getUsersBySberId,
  getProgressByUser,
  createProgressAchieve,
  createUser,
  getAchiviesFomUser,
};
