import { saveLocal } from "./storage";
import { loadSideNav } from "./sidebar";
import { projectList } from "./storage";
import { formatCategories } from "./project";
import { categoryList } from "./storage";
import * as dayjs from 'dayjs';

const projectsDisplay = document.querySelector('#projectsDisplay');

export let displayedProject = [];

function clearDisplay() {
    displayContainer.innerHTML = '';
    displayContainer.appendChild(projectsDisplay);
    projectsDisplay.innerHTML = '';
}

function deleteProject(projects, projectContainer) {
    projectList.removeProject(projects);
    saveLocal();
    projectsDisplay.removeChild(projectContainer);
}

function displayTasks(project, single) {
    let displayContent = document.createElement('div');
    displayContent.classList.add('content');
    for (let j = 0; j < project.tasks.length; j++) {
        let task = project.tasks[j];
        let taskItem = document.createElement('div');
        let taskField = document.createElement('div');
        let taskCheck = document.createElement('input');
        let taskDetails = document.createElement('div');
        let taskTitle = document.createElement('label');
        let deleteBtn = document.createElement('button');

        taskField.classList.add();

        taskCheck.classList.add('is-checkradio', 'is-circle', 'mr-1');
        taskCheck.setAttribute('type', 'checkbox');
        taskCheck.setAttribute('name', `${task.id}`);

        taskItem.classList.add('card-header', 'pt-1', 'my-1', 'is-justify-content-space-between');

        deleteBtn.classList.add('delete', 'is-small', 'hidden');
        deleteBtn.onclick = () => { project.removeTask(j), displayContent.removeChild(taskItem), saveLocal() }

        function toggleBtn() { deleteBtn.classList.toggle('hidden') };
        taskItem.addEventListener('mouseover', toggleBtn);
        taskItem.addEventListener('mouseout', toggleBtn);

        if (task.completed) {
            taskCheck.setAttribute('checked', 'true')
        }

        taskCheck.onclick = () => {
            task.completed = !task.completed;
            saveLocal();
            console.log(task)
        }

        taskTitle.setAttribute('for', `${task.id}`);
        taskTitle.textContent = task.title;

        taskField.appendChild(taskCheck);
        taskField.appendChild(taskTitle);

        taskItem.appendChild(taskField);
        taskItem.appendChild(deleteBtn);

        displayContent.appendChild(taskItem);
        if (single) {
            let timeEstimate = document.createElement('div');
            let editTaskBtn = document.createElement('button');

            taskDetails.classList.add('card-content', 'hidden');
            taskDetails.textContent = task.desc;

            timeEstimate.classList.add('is-italic');
            timeEstimate.textContent = `Estimated time: ${task.time} min`;

            editTaskBtn.classList.add('button', 'is-info', 'is-outlined', 'is-light');
            editTaskBtn.textContent = 'Edit Task';
            editTaskBtn.onclick = () => {
                createTaskModal(true, task, single);
            }

            taskDetails.appendChild(timeEstimate);
            taskDetails.appendChild(editTaskBtn);
            displayContent.appendChild(taskDetails);
            taskItem.classList.add('hover');
            taskItem.onclick = () => {
                taskDetails.classList.toggle('hidden');
            }
        }
        deleteBtn.onclick = () => { 
            project.removeTask(j);
            saveLocal();
            if (single) {
                focusOneProject(project);
            } else {
                displayMultipleProjects(projectList.projects);
            }
        }
    }
    return displayContent;
}

function createTaskModal(edit, item, single) {
    let body = document.querySelector('body');
    let modal = document.createElement('div');
    let modalBackground = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalBox = document.createElement('div');
    let titleField = document.createElement('div');
    let titleLabel = document.createElement('label');
    let titleControl = document.createElement('div');
    let titleInput = document.createElement('input');
    let descField = document.createElement('div');
    let descLabel = document.createElement('label');
    let descControl = document.createElement('div');
    let descInput = document.createElement('textarea');
    let timeField = document.createElement('div');
    let timeLabel = document.createElement('label');
    let timeControl = document.createElement('div');
    let timeInput = document.createElement('input');
    let timeValidation = document.createElement('p');
    let btnField = document.createElement('div');
    let submitBtn = document.createElement('button');
    let submitBtnControl = document.createElement('div');
    let cancelBtn = document.createElement('button');
    let cancelBtnControl = document.createElement('div');
    let closeBtn = document.createElement('button');

    modal.classList.add('modal', 'is-active');
    modalBackground.classList.add('modal-background');
    modalContent.classList.add('modal-content');
    modalBox.classList.add('box');
    titleField.classList.add('field');
    titleLabel.classList.add('label');
    titleLabel.textContent = 'Title';
    titleControl.classList.add('control');
    titleInput.classList.add('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');
    descField.classList.add('field');
    descLabel.classList.add('label');
    descLabel.textContent = 'Description';
    descControl.classList.add('control');
    descInput.classList.add('textarea');
    descInput.setAttribute('placeholder', 'Description');
    timeField.classList.add('field');
    timeLabel.classList.add('label');
    timeLabel.textContent = 'Time to complete';
    timeControl.classList.add('control');
    timeInput.classList.add('input');
    timeInput.setAttribute('type', 'number');
    timeInput.setAttribute('min', '0');
    timeValidation.textContent = 'Time must be a number!';
    timeValidation.classList.add('help', 'is-danger', 'hidden');
    btnField.classList.add('field', 'is-grouped');
    submitBtn.classList.add('button', 'is-link');
    submitBtn.textContent = 'Submit';
    submitBtnControl.classList.add('control');
    cancelBtn.classList.add('button', 'is-link', 'is-light');
    cancelBtn.textContent = 'Cancel';
    cancelBtnControl.classList.add('control');
    closeBtn.classList.add('modal-close', 'is-large');

    if (edit) {
        titleInput.value = item.title;
        descInput.value = item.desc;
        timeInput.value = parseInt(item.time);
        submitBtn.onclick = () => {
            if (parseInt(timeInput.value) == 0 || parseInt(timeInput.value) > 0) {
                displayedProject[0].time -= parseInt(item.time);
                item.title = titleInput.value;
                item.desc = descInput.value;
                item.time = parseInt(timeInput.value) || 0;
                displayedProject[0].time += parseInt(item.time);
                saveLocal();
                focusOneProject(displayedProject[0]);
                body.removeChild(modal);
            } else {
                timeInput.classList.add('is-danger');
                timeValidation.classList.remove('hidden');
            }
        }
    } else {
        submitBtn.onclick = () => {
            if (parseInt(timeInput.value) == 0 || parseInt(timeInput.value) > 0) {
                item.addTask(titleInput.value, descInput.value, parseInt(timeInput.value));
                saveLocal();
                if (single) {
                    focusOneProject(item);
                } else {
                    displayMultipleProjects(projectList.projects);
                }
                body.removeChild(modal);
            } else {
                timeInput.classList.add('is-danger');
                timeValidation.classList.remove('hidden');
            }
        }
    }

    cancelBtn.onclick = () => body.removeChild(modal);
    closeBtn.onclick = () => body.removeChild(modal);

    titleControl.appendChild(titleInput);
    titleField.appendChild(titleLabel);
    titleField.appendChild(titleControl);
    descControl.appendChild(descInput);
    descField.appendChild(descLabel);
    descField.appendChild(descControl);
    timeControl.appendChild(timeInput);
    timeField.appendChild(timeLabel);
    timeField.appendChild(timeControl);
    timeField.appendChild(timeValidation);
    submitBtnControl.appendChild(submitBtn);
    cancelBtnControl.appendChild(cancelBtn);
    btnField.appendChild(submitBtnControl);
    btnField.appendChild(cancelBtnControl);
    modalBox.appendChild(titleField);
    modalBox.appendChild(descField);
    modalBox.appendChild(timeField);
    modalBox.appendChild(btnField);
    modalContent.appendChild(modalBox);
    modal.appendChild(modalBackground);
    modal.appendChild(modalContent);
    modal.appendChild(closeBtn);
    body.appendChild(modal)
}

function createEditProjectModal(project, single) {
    let body = document.querySelector('body');

    let modal = document.createElement('div');
    let modalBackground = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalBox = document.createElement('div');

    let titleField = document.createElement('div');
    let titleLabel = document.createElement('label');
    let titleControl = document.createElement('div');
    let titleInput = document.createElement('input');

    let descField = document.createElement('div');
    let descLabel = document.createElement('label');
    let descControl = document.createElement('div');
    let descInput = document.createElement('textarea');

    let dateField = document.createElement('div');
    let dateLabel = document.createElement('label');
    let dateControl = document.createElement('div');
    let dateInput = document.createElement('input');
    
    let columnField = document.createElement('div');

    let colorColumn = document.createElement('div');
    let colorField = document.createElement('div');
    let colorLabel = document.createElement('label');
    let colorControl = document.createElement('div');
    let colorSelectContainer = document.createElement('div');
    let colorSelect = document.createElement('select');
    let colorWhite = document.createElement('option');
    let colorDark = document.createElement('option');
    let colorBlue = document.createElement('option');
    let colorGreen = document.createElement('option');
    let colorYellow = document.createElement('option');
    let colorRed = document.createElement('option');

    let categoryColumn = document.createElement('div');
    let categoryField = document.createElement('div');
    let categoryLabel = document.createElement('label');
    let categoryControl = document.createElement('div');
    let categoryInput = document.createElement('input')

    let btnField = document.createElement('div');

    let submitBtn = document.createElement('button');
    let submitBtnControl = document.createElement('div');

    let cancelBtn = document.createElement('button');
    let cancelBtnControl = document.createElement('div');

    let closeBtn = document.createElement('button');

    modal.classList.add('modal', 'is-active');
    modalBackground.classList.add('modal-background');
    modalContent.classList.add('modal-content');
    modalBox.classList.add('box');

    titleField.classList.add('field');
    titleLabel.classList.add('label');
    titleLabel.textContent = 'Title';
    titleControl.classList.add('control');
    titleInput.classList.add('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');
    titleInput.value = project.title;

    descField.classList.add('field');
    descLabel.classList.add('label');
    descLabel.textContent = 'Description';
    descControl.classList.add('control');
    descInput.classList.add('textarea');
    descInput.setAttribute('placeholder', 'Description');
    descInput.value = project.desc;

    dateField.classList.add('field');
    dateLabel.classList.add('label');
    dateLabel.textContent = 'Due date';
    dateControl.classList.add('control');
    dateInput.classList.add('input');
    dateInput.setAttribute('type', 'date');
    dateInput.value = project.date;

    columnField.classList.add('columns');
    let colors = ['White','Dark','Blue','Green','Yellow','Red'];
    let colorValues = ['white','dark','info','primary','warning','danger'];
    let colorOptions = [colorWhite, colorDark, colorBlue, colorGreen, colorYellow, colorRed];
    colorColumn.classList.add('column', 'is-3');
    colorField.classList.add('field');
    colorLabel.classList.add('label');
    colorLabel.innerHTML = 'Color <span class="subtitle is-6">(Optional)</span>';
    colorControl.classList.add('control');
    colorSelectContainer.classList.add('select');
    for (let i = 0; i < 6; i++) {
        colorOptions[i].textContent = colors[i];
        colorOptions[i].setAttribute('value', colorValues[i]);
    }
    colorSelect.value = project.color;

    categoryColumn.classList.add('column', 'is-8');
    categoryField.classList.add('field');
    categoryLabel.classList.add('label');
    categoryLabel.innerHTML = 'Categories <span class="subtitle is-6">(Optional, separated by space)</span>'
    categoryControl.classList.add('control');
    categoryInput.classList.add('input');
    categoryInput.setAttribute('type','text');
    categoryInput.setAttribute('placeholder','Categories');
    categoryInput.value = project.categories.join(' ');
    
    btnField.classList.add('field', 'is-grouped');

    submitBtn.classList.add('button', 'is-link');
    submitBtn.textContent = 'Submit';
    submitBtnControl.classList.add('control');
    submitBtn.onclick = () => {
        project.title = titleInput.value;
        project.desc = descInput.value;
        project.date = dateInput.value;
        project.color = colorSelect.value;
        let formatted = formatCategories(categoryInput);
        project.categories = formatted;
        for (let i = 0; i < formatted.length; i++) {
            categoryList.addCategory(formatted[i]);
        }
        loadSideNav();
        saveLocal();
        body.removeChild(modal);
        if (single) {
            focusOneProject(project);
        } else {
            displayMultipleProjects(projectList.projects);
        }
    }

    cancelBtn.classList.add('button', 'is-link', 'is-light');
    cancelBtn.textContent = 'Cancel';
    cancelBtnControl.classList.add('control');

    closeBtn.classList.add('modal-close', 'is-large');

    cancelBtn.onclick = () => body.removeChild(modal);
    closeBtn.onclick = () => body.removeChild(modal);

    titleControl.appendChild(titleInput);
    titleField.appendChild(titleLabel);
    titleField.appendChild(titleControl);
    descControl.appendChild(descInput);
    descField.appendChild(descLabel);
    descField.appendChild(descControl);
    dateControl.appendChild(dateInput);
    dateField.appendChild(dateLabel);
    dateField.appendChild(dateControl);
    for (let i = 0; i < 6; i++) {
        colorSelect.appendChild(colorOptions[i]);
        if (colorValues[i] == project.color) {
            colorOptions[i].setAttribute('selected','selected');
        }
    };
    colorSelectContainer.appendChild(colorSelect);
    colorControl.appendChild(colorSelectContainer);
    colorField.appendChild(colorLabel);
    colorField.appendChild(colorControl);
    colorColumn.appendChild(colorField);
    columnField.appendChild(colorColumn);
    categoryControl.appendChild(categoryInput);
    categoryField.appendChild(categoryLabel);
    categoryField.appendChild(categoryInput);
    categoryColumn.appendChild(categoryField);
    columnField.appendChild(categoryColumn);
    submitBtnControl.appendChild(submitBtn);
    cancelBtnControl.appendChild(cancelBtn);
    btnField.appendChild(submitBtnControl);
    btnField.appendChild(cancelBtnControl);
    modalBox.appendChild(titleField);
    modalBox.appendChild(descField);
    modalBox.appendChild(dateField);
    modalBox.appendChild(columnField);
    modalBox.appendChild(btnField);
    modalContent.appendChild(modalBox);
    modal.appendChild(modalBackground);
    modal.appendChild(modalContent);
    modal.appendChild(closeBtn);
    body.appendChild(modal)
}

function createDisplay(projects, single) {
    let projectContainer = document.createElement('div');
    let contentContainer = document.createElement('div');
    let displayTitle = document.createElement('p');
    let displayTime = document.createElement('p');
    let displayDate = document.createElement('p');
    let projectTasks = displayTasks(projects, single);
    let deleteProjectBtn = document.createElement('button');
    let addTaskBtn = document.createElement('button');
    let editProjectBtn = document.createElement('button');
    let bottomBtnContainer = document.createElement('div');

    projectContainer.classList.add('box', 'notification', `is-${projects.color}`, 'is-vertical','pb-1');
    contentContainer.classList.add('content');
    displayTitle.classList.add('title');
    displayTime.classList.add('subtitle');
    addTaskBtn.classList.add('button', 'is-primary', 'is-outlined', 'is-light');
    editProjectBtn.classList.add('button', 'is-info', 'is-outlined', 'is-light');
    deleteProjectBtn.classList.add('delete');
    bottomBtnContainer.classList.add('field', 'is-grouped', 'is-flex', 'is-justify-content-space-around');

    deleteProjectBtn.onclick = () => {
        deleteProject(projects, projectContainer);
        loadSideNav();
    }

    displayTitle.textContent = projects.title;
    displayTitle.onclick = () => {
        focusOneProject(projects);
    }

    displayDate.classList.add('dateDisplay');
    if (projects.date == '') {
        displayDate.textContent = 'Due date: none';
    } else if (dayjs().isAfter(projects.date) && dayjs().format('MMM DD YYYY') == dayjs(projects.date).format('MMM DD YYYY')) {
        displayDate.innerHTML = `Due date: ${dayjs(projects.date).format('MMM DD YYYY')} <br><strong>DUE TODAY!</strong>`;
        displayDate.classList.add('is-italic');
        projectContainer.classList.add('dueProject');
    } else if (dayjs().isAfter(projects.date)) {
        displayDate.innerHTML = `Due date: ${dayjs(projects.date).format('MMM DD YYYY')} <br><strong>PAST DUE!</strong>`;
        displayDate.classList.add('is-italic');
        projectContainer.classList.add('lateProject');
    } else {
        displayDate.textContent = `Due date: ${dayjs(projects.date).format('MMM DD YYYY')}`;
    }
    displayDate.style.marginBottom = '0px';

    displayTime.textContent = `Est. time: ${projects.time} min`;

    contentContainer.appendChild(displayTitle);

    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.onclick = () => {
        createTaskModal(false, projects, single)
    }
    editProjectBtn.textContent = 'Edit';
    editProjectBtn.onclick = () => {
        createEditProjectModal(projects, single);
    }
    if (single) {
        projectContainer.classList.add('tile');
        projectContainer.id = "largeDisplay"
        let displayCategories = document.createElement('div');

        displayCategories.classList.add('subtitle');
        if (projects.categories.length > 0) {
            displayCategories.textContent = `Categories: ${projects.categories.join(', ')}`
        } else {
            displayCategories.textContent = '';
        }

        let displayDesc = document.createElement('p');
        displayDesc.textContent = projects.desc;
        displayDesc.classList.add('subtitle');

        contentContainer.appendChild(displayDesc);
        contentContainer.appendChild(displayCategories);
        projectTasks.id = "largeTaskContainer";

    } else {
        projectContainer.classList.add('mx-3');
        projectContainer.id = "smallDisplay";
        projectTasks.id = "smallTaskContainer"
        displayTitle.classList.add('projectTitle');
    }

    contentContainer.appendChild(displayTime);
    contentContainer.appendChild(displayDate);
    contentContainer.appendChild(projectTasks);
    bottomBtnContainer.appendChild(addTaskBtn);
    bottomBtnContainer.appendChild(editProjectBtn);
    projectContainer.appendChild(contentContainer);
    projectContainer.appendChild(deleteProjectBtn);
    projectContainer.appendChild(bottomBtnContainer);
    projectsDisplay.appendChild(projectContainer);
}

export function focusOneProject(project) {
    clearDisplay();
    createDisplay(project, true);
    displayedProject = [project];
}

export function displayMultipleProjects(list) {
    clearDisplay();
    for (let i = 0; i < list.length; i++) {
        createDisplay(list[i], false)
    }
    displayedProject = list;
}