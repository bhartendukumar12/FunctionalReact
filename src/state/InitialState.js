import RouteConstants from '../constants/RouteConstants';

/**
 * Defines the intial state for the app.
 */

const HOME_ROOT_INDEX = '1';
const EDGE_NODE_ROOT_INDEX = '2';
const EDGE_APP_INSTANCE_ROOT_INDEX = '3';
const CLUSTER_INSTANCE_ROOT_INDEX = '4';
const LIBRARY_ROOT_INDEX = '5';
const REPORTS_ROOT_INDEX = '6';
const JOBS_ROOT_INDEX = '7';
const MARKETPLACE_ROOT_INDEX = '8';
const ADMINISTRATION_ROOT_INDEX = '9';
const PROFILE_ROOT_INDEX = '10';
const USER_ROOT_INDEX = `${ADMINISTRATION_ROOT_INDEX}-1`;
const ROLE_ROOT_INDEX = `${ADMINISTRATION_ROOT_INDEX}-2`;
const PROJECT_ROOT_INDEX = `${ADMINISTRATION_ROOT_INDEX}-3`;
const EDGE_APP_ROOT_INDEX = `${MARKETPLACE_ROOT_INDEX}-1`;
const MODEL_ROOT_INDEX = `${MARKETPLACE_ROOT_INDEX}-2`;
const NETWORK_ROOT_INDEX = `${LIBRARY_ROOT_INDEX}-1`;
const NETWORK_INSTANCE_ROOT_INDEX = `${LIBRARY_ROOT_INDEX}-2`;
const DATASTORE_ROOT_INDEX = `${LIBRARY_ROOT_INDEX}-3`;
const EVE_IMAGE_ROOT_INDEX = `${LIBRARY_ROOT_INDEX}-4`;
const APP_IMAGE_ROOT_INDEX = `${LIBRARY_ROOT_INDEX}-5`;
const VOLUME_INSTANCE_ROOT_INDEX = `${LIBRARY_ROOT_INDEX}-6`;

export default {
    primaryNavigation: RouteConstants.DEFAULT,
    primaryNavigationState: false,
    secondaryNavigation: '',
    tertiaryNavigation: '',
    data: [],
    redirectTo: '',
    agreement: {
        privacyPolicyModalShow: false,
        termsAndConditionsModalShow: false
    },
    filters: {
        project: {
            id: 'all-projects',
            name: 'global.filter.type.project.all'
        }
    },
    dynamicMenu: [],
    menu: [
        {
            id: HOME_ROOT_INDEX,
            index: 1,
            ...RouteConstants.DEFAULT
        },
        {
            id: EDGE_NODE_ROOT_INDEX,
            index: parseInt(EDGE_NODE_ROOT_INDEX, 10),
            ...RouteConstants.EDGE_NODES
        },
        {
            id: EDGE_APP_INSTANCE_ROOT_INDEX,
            index: parseInt(EDGE_APP_INSTANCE_ROOT_INDEX, 10),
            ...RouteConstants.EDGE_APP_INSTANCES
        },
        {
            id: CLUSTER_INSTANCE_ROOT_INDEX,
            index: parseInt(EDGE_APP_INSTANCE_ROOT_INDEX, 10),
            ...RouteConstants.CLUSTER_INSTANCES
        },
        {
            id: LIBRARY_ROOT_INDEX,
            index: parseInt(LIBRARY_ROOT_INDEX, 10),
            ...RouteConstants.LIBRARY
        },
        {
            id: REPORTS_ROOT_INDEX,
            index: parseInt(REPORTS_ROOT_INDEX, 10),
            ...RouteConstants.REPORTS
        },
        {
            id: JOBS_ROOT_INDEX,
            index: parseInt(JOBS_ROOT_INDEX, 10),
            ...RouteConstants.JOBS
        },
        {
            id: MARKETPLACE_ROOT_INDEX,
            index: parseInt(MARKETPLACE_ROOT_INDEX, 10),
            ...RouteConstants.MARKETPLACE
        }
    ],
    adminMenu: [
        {
            id: `${ADMINISTRATION_ROOT_INDEX}-0`,
            index: 0,
            ...RouteConstants.ADMINISTRATION_ENTERPRISE
        },
        {
            id: `${ADMINISTRATION_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.ADMINISTRATION_PROJECTS
        },
        {
            id: `${ADMINISTRATION_ROOT_INDEX}-2`,
            index: 2,
            ...RouteConstants.ADMINISTRATION_ROLES
        },
        {
            id: `${ADMINISTRATION_ROOT_INDEX}-3`,
            index: 3,
            ...RouteConstants.ADMINISTRATION_USERS
        },
        {
            id: `${ADMINISTRATION_ROOT_INDEX}-4`,
            index: 4,
            ...RouteConstants.ADMINISTRATION_CERTIFICATES
        }
    ],
    marketplaceMenu: [
        {
            id: `${MARKETPLACE_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.MARKETPLACE_EDGE_APPLICATIONS
        },
        {
            id: `${MARKETPLACE_ROOT_INDEX}-2`,
            index: 2,
            ...RouteConstants.MARKETPLACE_MODELS
        }
    ],
    libraryMenu: [
        {
            id: `${LIBRARY_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.LIBRARY_NETWORKS
        },
        {
            id: `${LIBRARY_ROOT_INDEX}-2`,
            index: 2,
            ...RouteConstants.LIBRARY_NETWORK_INSTANCES
        },
        {
            id: `${LIBRARY_ROOT_INDEX}-3`,
            index: 3,
            ...RouteConstants.LIBRARY_DATA_STORES
        },
        {
            id: `${LIBRARY_ROOT_INDEX}-4`,
            index: 4,
            ...RouteConstants.LIBRARY_IMAGES_EVE
        },
        {
            id: `${LIBRARY_ROOT_INDEX}-5`,
            index: 5,
            ...RouteConstants.LIBRARY_IMAGES_APP
        },
        {
            id: `${LIBRARY_ROOT_INDEX}-6`,
            index: 6,
            ...RouteConstants.LIBRARY_VOLUME_INSTANCES
        }
    ],
    userDetailsMenu: [
        {
            id: `${USER_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.ADMINISTRATION_USERS_DETAILS_INFO
        },
        {
            id: `${USER_ROOT_INDEX}-2`,
            index: 2,
            ...RouteConstants.ADMINISTRATION_USERS_DETAILS_LOGS
        }
    ],
    roleDetailsMenu: [
        {
            id: `${ROLE_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.ADMINISTRATION_ROLES_DETAILS_INFO
        }
    ],
    projectDetailsMenu: [
        {
            id: `${PROJECT_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.ADMINISTRATION_PROJECTS_DETAILS_INFO
        },
        {
            id: `${PROJECT_ROOT_INDEX}-2`,
            index: 2,
            ...RouteConstants.ADMINISTRATION_PROJECTS_DETAILS_EVENTS
        }
    ],
    uploadAppMenu: [
        {
            id: `${EDGE_APP_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.MARKETPLACE_EDGE_APPLICATIONS_LOCAL_UPLOAD_INFO
        }
    ],
    edgeNodeDetailsMenu: [
        {
            id: `${EDGE_NODE_ROOT_INDEX}-1-1`,
            index: 1,
            ...RouteConstants.EDGE_NODES_DETAILS_STATUS
        },
        {
            id: `${EDGE_NODE_ROOT_INDEX}-1-2`,
            index: 2,
            ...RouteConstants.EDGE_NODES_DETAILS_INFO
        },
        {
            id: `${EDGE_NODE_ROOT_INDEX}-1-3`,
            index: 3,
            ...RouteConstants.EDGE_NODES_DETAILS_ADAPTERS
        },
        {
            id: `${EDGE_NODE_ROOT_INDEX}-1-4`,
            index: 4,
            ...RouteConstants.EDGE_NODES_DETAILS_EVENTS
        }
    ],
    edgeAppInstanceDetailsMenu: [
        {
            id: `${EDGE_APP_INSTANCE_ROOT_INDEX}-1-1`,
            index: 1,
            ...RouteConstants.EDGE_APP_INSTANCES_DETAILS_STATUS
        },
        {
            id: `${EDGE_APP_INSTANCE_ROOT_INDEX}-1-2`,
            index: 2,
            ...RouteConstants.EDGE_APP_INSTANCES_DETAILS_INFO
        },
        {
            id: `${EDGE_APP_INSTANCE_ROOT_INDEX}-1-3`,
            index: 3,
            ...RouteConstants.EDGE_APP_INSTANCES_DETAILS_ADAPTERS
        },
        {
            id: `${EDGE_APP_INSTANCE_ROOT_INDEX}-1-4`,
            index: 4,
            ...RouteConstants.EDGE_APP_INSTANCES_DETAILS_EVENTS
        },
        {
            id: `${EDGE_APP_INSTANCE_ROOT_INDEX}-1-5`,
            index: 5,
            ...RouteConstants.EDGE_APP_INSTANCES_DETAILS_LOGS
        }
    ],
    clusterInstanceDetailsMenu: [
        {
            id: `${CLUSTER_INSTANCE_ROOT_INDEX}-1-1`,
            index: 1,
            ...RouteConstants.CLUSTER_INSTANCES_DETAILS_STATUS
        },
        {
            id: `${CLUSTER_INSTANCE_ROOT_INDEX}-1-2`,
            index: 2,
            ...RouteConstants.CLUSTER_INSTANCES_DETAILS_INFO
        },
        {
            id: `${CLUSTER_INSTANCE_ROOT_INDEX}-1-3`,
            index: 3,
            ...RouteConstants.CLUSTER_INSTANCES_DETAILS_EVENTS
        }
    ],
    profileMenu: [
        {
            id: `${PROFILE_ROOT_INDEX}-1-1`,
            index: 1,
            ...RouteConstants.PROFILE_USER
        },
        {
            id: `${PROFILE_ROOT_INDEX}-1-2`,
            index: 2,
            ...RouteConstants.PROFILE_PASSWORD
        }
    ],
    networkDetailsMenu: [
        {
            id: `${NETWORK_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.LIBRARY_NETWORKS_DETAILS_INFO
        }
    ],
    networkInstanceDetailsMenu: [
        {
            id: `${NETWORK_INSTANCE_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.LIBRARY_NETWORK_INSTANCES_DETAILS_STATUS
        },
        {
            id: `${NETWORK_INSTANCE_ROOT_INDEX}-2`,
            index: 2,
            ...RouteConstants.LIBRARY_NETWORK_INSTANCES_DETAILS_INFO
        }
    ],
    dataStoreDetailsMenu: [
        {
            id: `${DATASTORE_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.LIBRARY_DATA_STORES_DETAILS_INFO
        }
    ],
    eveImageDetailsMenu: [
        {
            id: `${EVE_IMAGE_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.LIBRARY_IMAGES_EVE_DETAILS_INFO
        }
    ],
    appImageDetailsMenu: [
        {
            id: `${APP_IMAGE_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.LIBRARY_IMAGES_APP_DETAILS_INFO
        }
    ],
    volumeInstanceDetailsMenu: [
        {
            id: `${VOLUME_INSTANCE_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.LIBRARY_VOLUME_INSTANCES_DETAILS_STATUS
        },
        {
            id: `${VOLUME_INSTANCE_ROOT_INDEX}-2`,
            index: 2,
            ...RouteConstants.LIBRARY_VOLUME_INSTANCES_DETAILS_INFO
        }
    ],
    modelDetailsMenu: [
        {
            id: `${MODEL_ROOT_INDEX}-1`,
            index: 1,
            ...RouteConstants.MARKETPLACE_MODELS_DETAILS_INFO
        },
        {
            id: `${MODEL_ROOT_INDEX}-2`,
            index: 2,
            ...RouteConstants.MARKETPLACE_MODELS_DETAILS_ATTESTATION
        }
    ]
};
