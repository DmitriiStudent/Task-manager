const API_URL = 'http://localhost:3001/tasks';

// Получить все задачи
export async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Ошибка загрузки задач');
        }
        return await response.json();
    } catch (error) {
        console.error('fetchTasks error:', error);
        throw error;
    }
}

// Добавить новую задачу
export async function addTaskToServer(task) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            throw new Error('Ошибка добавления задачи');
        }
        return await response.json();
    } catch (error) {
        console.error('addTaskToServer error:', error);
        throw error;
    }
}

// Удалить задачу
export async function deleteTaskFromServer(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Ошибка удаления задачи');
        }
        return true;
    } catch (error) {
        console.error('deleteTaskFromServer error:', error);
        throw error;
    }
}

// Обновить задачу (например, изменить статус completed)
export async function updateTaskOnServer(id, updatedTask) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask)
        });
        if (!response.ok) {
            throw new Error('Ошибка обновления задачи');
        }
        return await response.json();
    } catch (error) {
        console.error('updateTaskOnServer error:', error);
        throw error;
    }
}