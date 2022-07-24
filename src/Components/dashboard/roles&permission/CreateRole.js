import React from "react";
import "./role.css";
import {
  createRole as createRoleAction,
  updateRole as updateRoleAction,
} from "./../../../redux/Action/RoleActions";
import { connect } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";

const CreateRole = (props) => {
  /**
   * Toastfy message Function
   * @param {*} toastMsg
   * @returns A toast message
   */

  const notify = (toastMsg) => toast(toastMsg);

  /**
   * Submit Function
   * @param {*} event
   */

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (props.isEdit) {
      props.updateRoleAction(props?.roleId, {
        roleName: props?.roleName?.role,
      });
      clear();
    } else {
      props.createRoleAction({ roleName: props.roleName.role });
      clear();
    }
  };

  /**
   * Clear the form
   * after creation
   */

  const clear = () => {
    props.setRoleName({
      role: "",
    });
  };

  /**
   * Set edit mode to false
   * If roleName is empty
   */

  React.useEffect(() => {
    if (props.roleName.role === "") {
      props.setIsEdit(false);
    }
  }, [props.roleName.role]);

  /**
   * Display a toast message
   * If role created successfully
   */

  React.useEffect(() => {
    if (props?.addRole?.success) {
      notify("Created successfully 👍🏾");
      props.setIsCreated(true);
    }
  }, [props?.addRole?.success]);

  React.useEffect(() => {
    if (props.updateRole.success) {
      notify("Updated successfully 👍🏾");
      props.setIsUpdated(true);
    }
  }, [props.updateRole.success]);

  return (
    <React.Fragment>
    <ToastContainer autoClose={500} limit={2} transition={Slide}/>
      <div className="role__form__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Create a role or Edit role here....✍️"
            value={props.roleName.role}
            onChange={(event) =>
              props.setRoleName({
                ...props.roleName,
                role: event.target.value,
              })
            }
          />
          <button type="submit" className="add__role__btn">
            {props.isEdit ? "EDIT" : "CREATE"}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

/**
 * @param {*} "Reducers"
 * @returns "States"
 */

const mapStateToProps = ({ createRoleReducer, updateRoleReducer }) => {
  const { addRole } = createRoleReducer;
  const { updateRole } = updateRoleReducer;
  return { addRole, updateRole };
};

/**
 * Mapping state to props
 */

export default connect(mapStateToProps, {
  createRoleAction,
  updateRoleAction,
})(CreateRole);
