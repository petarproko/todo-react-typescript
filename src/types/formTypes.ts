export type Form = {
    todoItem: string
    id: number | null
};

export type ValidForm = {
    todoItem: {
        valid: boolean
        message: string
    }
}

