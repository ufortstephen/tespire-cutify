export const blogsApi = (http) => ({
    getBlogs(payload) {
        return http.get(`posts?categories=${payload}`);
    }
});
