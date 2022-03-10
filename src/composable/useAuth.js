import {ref} from "vue";

const isAuthenticated = ref(false);

const usersFromDB = [{username: "admin", password: "admin", name: "Administrator"},
    {username: "vsmithbe", password: "vsmithbe", name: "Veronica"}];

const user = ref("");

const useAuth = () => {
    const login =(username, password) => {
        const user = usersFromDB.find (
            (user) => user.username == username && user.password
        );

        if (user) {
            isAuthenticated.value = true;
            user.value = user.name;
        }
    };

const logout = () => {
    isAuthenticated.value = false;
    user.value = "";
};
    return { isAuthenticated, login, logout, user};
};

export default useAuth;