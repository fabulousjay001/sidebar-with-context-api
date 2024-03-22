/** @format */

import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				isSidebarOpen,
				openModal,
				closeModal,
				closeSidebar,
				openSidebar,
			}}>
			{children}
		</AppContext.Provider>
	); //you need to add children else you get a big fat err
};

export { AppContext, AppProvider }; //AppProvider wrapped the app component in the index.js will AppContext is used in the home component

//Alternatively (See Below), we can use custom hook if we dont wont to import both appContext and useContext in the home file

export const useGlobalContext = () => {
	return useContext(AppContext);
};
