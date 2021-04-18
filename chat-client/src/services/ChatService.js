import axios from 'axios';

const Url = "http://localhost:8080/api";


export default class ChatService {
    static async getAllChats() {
        const fetchAllChatUrl = Url + "/chats";
        try {
            const { data } = await axios.get(fetchAllChatUrl);
            return data.map((Chat) => ({
                id: Chat._id,
                createdAt: Chat.createdAt,
                dest: Chat.dest,
                from: Chat.from,
                message: Chat.message,
                messagetype: Chat.messagetype,
                updatedAt: Chat.updatedAt,
            })).sort(function (a, b) {
                var c = new Date(a.createdAt);
                var d = new Date(b.createdAt);
                return c - d;
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async getChatById(id) {
        const fetchChatByIdUrl = `${Url}/Chats/${id}`;
        try {


        } catch (error) {
            console.log(error);
        }
    }

    static async createChat({ title, type, users }) {
        try {

        } catch (error) {
            console.log(error);
        }
    }

    static async deleteChat(id) {
        try {

        } catch (error) {
            console.log(error);
        }
    }
}

