// script.js
document.addEventListener("DOMContentLoaded", () => {
    const glasses = [
        { id: 1, name: "Kính A", imgUrl: "glasses_a.png" },
        { id: 2, name: "Kính B", imgUrl: "glasses_b.png" },
        { id: 3, name: "Kính C", imgUrl: "glasses_c.png" },
        // Thêm các mẫu kính khác vào đây
    ];

    // Thành phần thay đổi: mẫu kính được chọn
    let selectedGlassesId = null;

    const glassesList = document.getElementById("glasses-list");
    const modelGlasses = document.getElementById("model-glasses");

    // Tạo danh sách kính
    glasses.forEach((glass) => {
        const imgElement = document.createElement("img");
        imgElement.src = glass.imgUrl;
        imgElement.alt = glass.name;
        imgElement.dataset.id = glass.id;

        imgElement.addEventListener("click", () => {
            selectedGlassesId = glass.id;
            // Cập nhật state: setState
            modelGlasses.src = glass.imgUrl;
        });

        glassesList.appendChild(imgElement);
    });
});
