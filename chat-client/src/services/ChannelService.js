import axios from 'axios';

const Url = "http://localhost:8080/api";


export default class ChannelService {
    static async getAllChannels() {
        const fetchAllChannelUrl = Url + "/channels";
        try {
            const { data } = await axios.get(fetchAllChannelUrl);
            return data.map((channel) => ({
                id: channel._id,
                channelid: channel.channelid,
                createdAt: channel.createdAt,
                orgid: channel.orgid,
                title: channel.title,
                type: channel.type,
                updatedAt: channel.updatedAt,
                users: channel.users,
            }));
        } catch (error) {
            console.log(error);
        }
    }

    static async getChannelById(id) {
        const fetchChannelByIdUrl = `${Url}/channels/${id}`;
        try {
            const { data: {
                _id,
                channelid,
                createdAt,
                orgid,
                title,
                type,
                updatedAt,
                users,
            } } = await axios.get(fetchChannelByIdUrl);

            return {
                id: _id,
                channelid,
                createdAt,
                orgid,
                title,
                type,
                updatedAt,
                users,
            }

        } catch (error) {
            console.log(error);
        }
    }

    static async createChannel(data) {
        const addChannelUrl = Url + "/channels";
        try {
            return await axios.post(addChannelUrl, data);
        } catch (error) {
            console.log(error);
        }
    }

    static async updateChannel({ id, title, type, users }) {
        try {

        } catch (error) {
            console.log(error);
        }
    }

    static async deleteChannel(id) {
        try {

        } catch (error) {
            console.log(error);
        }
    }
}

