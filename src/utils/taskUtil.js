export const updateTask = (state) => {
    localStorage.setItem('tasks', JSON.stringify(state));

    return state;
}