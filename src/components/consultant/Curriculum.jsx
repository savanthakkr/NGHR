import React, { useState } from "react";

function Curriculum() {
    const [sections, setSections] = useState([
        { id: '01', name: "Section 01", lectures: [{ name: "Lecture 1" }, { name: "Lecture 2" }] },
    ]);

    const [editMode, setEditMode] = useState({ sectionIndex: null, lectureIndex: null });

    const addSections = () => {
        const newSectionId = String(sections.length + 1).padStart(2, "0");
        setSections([...sections, { id: newSectionId, name: `Section ${newSectionId}`, lectures: [{ name: "Lecture 1" }, { name: "Lecture 2" }] }]);
    };

    const addLectures = (sectionIndex) => {
        const newLectureId = sections[sectionIndex].lectures.length + 1;
        const updatedSections = [...sections];
        const newLectureName = `Lecture ${updatedSections[sectionIndex].lectures.length + 1}`;
        updatedSections[sectionIndex].lectures.push({ name: newLectureName });
        setSections(updatedSections);
    };

    const deleteSection = (index) => {
        const updatedSections = sections.filter((_, i) => i !== index);
        setSections(updatedSections);
    };

    const deleteLecture = (sectionIndex, lectureIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].lectures = updatedSections[sectionIndex].lectures.filter((_, i) => i !== lectureIndex);
        setSections(updatedSections);
    };
    const handleEditSection = (sectionIndex, value) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].name = value;
        setSections(updatedSections);
    };
    const handleEditLecture = (sectionIndex, lectureIndex, value) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].lectures[lectureIndex].name = value;
        setSections(updatedSections);
    };
    const toggleEditSection = (sectionIndex) => {
        setEditMode({ sectionIndex, isEditingSection: true });
    };
    const toggleEditMode = (sectionIndex, lectureIndex) => {
        setEditMode({ sectionIndex, lectureIndex });
    };
    const saveEdit = () => {
        setEditMode({ sectionIndex: null, lectureIndex: null, isEditingSection: false });
    };
    return (
        <div className="col-lg-12">
            <div className="course-curriculum-heading">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section-title">
                            <h5>Course Curriculum</h5>
                        </div>
                    </div>
                    <div className="col-md-6 text-end">
                        <button
                            className="save-btn lg-btn w-unset"
                            type="submit"
                        >
                            Save
                        </button>
                        <button
                            className="save-preview-btn lg-btn w-unset"
                            type="submit"
                        >
                            Save & Preview
                        </button>
                    </div>
                </div>
            </div>

            {sections.map((section, sectionIndex) => (
                <div className="curriculum" key={section.id}>
                    <div className="curriculum-inner">
                        <div className="row">
                            <div className="col-md-6">
                                {editMode.sectionIndex === sectionIndex && editMode.isEditingSection ? (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={section.name}
                                        onChange={(e) => handleEditSection(sectionIndex, e.target.value)}
                                    />
                                ) : (
                                    <h5 className="title mb-10">
                                        <i className="bi bi-justify me-2"></i>
                                        <span className="text-black">Sections {section.id}:</span> {section.name}
                                    </h5>
                                )}
                            </div>
                            <div className="col-md-6">
                                <div className="curriculum-icon">
                                    <img
                                        src="/assets/images/icon/add-icon.png"
                                        alt=""
                                        className="me-3"
                                        onClick={() => addLectures(sectionIndex)}
                                    />
                                    <img
                                        src="/assets/images/icon/edit-icon.png"
                                        alt=""
                                        className="me-3"
                                        onClick={() => toggleEditSection(sectionIndex)}
                                    />
                                    <img
                                        src="/assets/images/icon/delete-icon.png"
                                        alt=""
                                        onClick={() => deleteSection(sectionIndex)}
                                    />
                                    {editMode.sectionIndex === sectionIndex && editMode.isEditingSection && (
                                        <button onClick={saveEdit} className="save-preview-btn bg-transparent ms-3">Save</button>
                                    )}
                                </div>
                            </div>
                            {section.lectures.map((lecture, lectureIndex) => (
                                <div className="col-12" key={lecture}>
                                    <div className="curriculum-lecture">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                {editMode.sectionIndex === sectionIndex && editMode.lectureIndex === lectureIndex ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={lecture.name}
                                                        onChange={(e) => handleEditLecture(sectionIndex, lectureIndex, e.target.value)}
                                                    />
                                                ) : (
                                                    <p className="mb-0 lecture-name">
                                                        <i className="bi bi-justify me-2"></i> {lecture.name}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="col-md-6">
                                                <div className="curriculum-icon form-wrapper">
                                                    <form className="border-0 p-0 me-3">
                                                        <div className="form-inner">
                                                            <div className="input-area select-area">
                                                                <select className="select1">
                                                                    <option value={0}>Contents</option>
                                                                    <option value={1}>Video</option>
                                                                    <option value={2}>Attach File</option>
                                                                    <option value={3}>Captions</option>
                                                                    <option value={4}>Description</option>
                                                                    <option value={5}>Lecture Notes</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <img
                                                        src="/assets/images/icon/edit-icon.png"
                                                        alt=""
                                                        className="me-3 icon"
                                                        onClick={() => toggleEditMode(sectionIndex, lectureIndex)}
                                                    />
                                                    {editMode.sectionIndex === sectionIndex && editMode.lectureIndex === lectureIndex && (
                                                        <button onClick={saveEdit} className="save-preview-btn me-3">Save</button>
                                                    )}
                                                    <img
                                                        src="/assets/images/icon/delete-icon.png"
                                                        alt=""
                                                        className="icon"
                                                        onClick={() => deleteLecture(sectionIndex, lectureIndex)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="col-12 add-section-btn">
                <div className="form-inner">
                    <button
                        className="lg-btn w-100 justify-center"
                        type="submit" onClick={addSections}
                    >
                        Add Sections
                    </button>
                </div>
            </div>
            <div className="curriculum-btn">
                <div className="row">
                    <div className="col-6">
                        <div className="form-inner">
                            <button
                                className="cancel-btn lg-btn w-unset"
                                type="submit"
                            >Previous
                            </button>
                        </div>
                    </div>
                    <div className="col-6 save-next-btn">
                        <div className="form-inner">
                            <button
                                className="primry-btn-2 lg-btn w-unset"
                                type="submit"
                            >
                                Save & Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Curriculum;
