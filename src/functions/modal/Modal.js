import { useState } from "react";

function useModal(initialVisible = false) {
    const [visible, updateVisible] = useState(initialVisible);

    function showModal() {
        updateVisible(true);
    }

    function hideModal() {
        updateVisible(false);
    }

    return { visible, showModal, hideModal };
}

export default useModal;