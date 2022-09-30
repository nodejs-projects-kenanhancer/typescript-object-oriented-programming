type Action =
    | { type: 'INIT' }
    | { type: 'SYNC' }
    | { type: 'LOG_IN', emailAddress: string }
    | { type: 'LOG_IN_SUCCESS', accessToken: string };

type LogAction =
    | { type: 'INFO' | 'WARN', message: string }
    | { type: 'ERROR', error: string };

type MemberAction =
    | { type: 'SIGN_UP', userName: string, password: string }
    | { type: 'SIGN_IN', userName: string, password: string }
    | { type: 'SIGN_OUT', userName: string }
    | { type: 'CHANGE_PASSWORD', userName: string, password: string, newPassword: string }
    | { type: 'RESET_PASSWORD', userName: string, newPassword: string, verificationCode: string }
    | { type: 'FORGOT_PASSWORD', userName: string }
    | { type: 'RESEND_CONFIRMATION_CODE', userName: string }
    | { type: 'CONFIRM_REGISTRATION', userName: string, verificationCode: string }
    | { type: 'DELETE_USER', userName: string, password: string }
    | { type: 'ADMIN_DELETE_USER', userName: string }
    | { type: 'ADMIN_DISABLE_USER', userName: string }
    | { type: 'ADMIN_ENABLE_USER', userName: string }
    | { type: 'RESET_LOGIN_TRY_COUNT', userName: string }
    | { type: 'INCREMENT_LOGIN_TRY_COUNT', userName: string }
    | { type: 'PUBLISH_NEW_USER_CREATED', userName: string, lastPassword: string }
    | { type: 'PUBLISH_PASSWORD_CHANGED', userName: string, lastPassword: string };




type Actions = Action['type'];

type LogActions = LogAction['type'];

type MemberActions = MemberAction['type'];

type ActionType<T> = T extends { type: infer T } ? T : never;


// const a1: ActionType<MemberAction>;






// type Dispatch = (actionType: ActionType,)

// type Action2 = {
//     type: ActionType,
//     emailAddress: string,
//     accessToken: string,
// };

// const a1: Action2 = { type: 'INIT', }

export { };