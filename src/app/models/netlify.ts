export interface Netlify {
    id:                                 string;
    site_id:                            string;
    plan:                               string;
    ssl_plan:                           null;
    premium:                            boolean;
    claimed:                            boolean;
    name:                               string;
    custom_domain:                      string;
    branch_deploy_custom_domain:        null;
    deploy_preview_custom_domain:       null;
    domain_aliases:                     any[];
    password:                           null;
    password_hash:                      null;
    sso_login:                          boolean;
    sso_login_context:                  string;
    notification_email:                 null;
    url:                                string;
    admin_url:                          string;
    deploy_id:                          string;
    build_id:                           string;
    deploy_url:                         string;
    state:                              string;
    screenshot_url:                     string;
    created_at:                         Date;
    updated_at:                         Date;
    user_id:                            string;
    error_message:                      null;
    ssl:                                boolean;
    ssl_url:                            string;
    force_ssl:                          boolean;
    ssl_status:                         null;
    max_domain_aliases:                 number;
    build_settings:                     BuildSettings;
    processing_settings:                ProcessingSettings;
    prerender:                          null;
    prerender_headers:                  null;
    deploy_hook:                        string;
    published_deploy:                   PublishedDeploy;
    managed_dns:                        boolean;
    jwt_secret:                         null;
    jwt_roles_path:                     string;
    account_id:                         string;
    account_slug:                       string;
    account_name:                       string;
    account_type:                       string;
    capabilities:                       Capabilities;
    dns_zone_id:                        string;
    identity_instance_id:               null;
    primary_create_project:             null;
    use_functions:                      null;
    use_edge_handlers:                  null;
    parent_user_id:                     null;
    automatic_tls_provisioning:         null;
    disabled:                           null;
    lifecycle_state:                    string;
    id_domain:                          string;
    use_lm:                             null;
    build_image:                        string;
    automatic_tls_provisioning_expired: boolean;
    analytics_instance_id:              null;
    functions_region:                   string;
    functions_timeout:                  null;
    plugins:                            any[];
    account_subdomain:                  null;
    functions_env:                      FunctionsEnv;
    cdp_enabled_contexts:               string[];
    deploy_retention_in_days:           number;
    build_timelimit:                    null;
    use_custom_domain_in_all_contexts:  boolean;
    uses_new_env_var:                   boolean;
    password_context:                   string;
    use_envelope:                       boolean;
    feature_flags:                      null;
    versions:                           Versions;
    default_domain:                     string;
}

export interface BuildSettings {
    cmd:                     string;
    dir:                     string;
    created_at:              Date;
    updated_at:              Date;
    private_logs:            null;
    allowed_branches:        string[];
    functions_dir:           null;
    installation_id:         number;
    skip_prs:                null;
    untrusted_flow:          string;
    base_rel_dir:            boolean;
    stop_builds:             boolean;
    public_repo:             boolean;
    skip_automatic_builds:   null;
    configuration_file_path: null;
    package_path:            string;
    provider:                string;
    env:                     Env;
    repo_type:               string;
    repo_url:                string;
    repo_branch:             string;
    repo_path:               string;
    repo_owner_type:         string;
    base:                    string;
    deploy_key_id:           null;
}

export interface Env {
    DEPRECATED: string;
}

export interface Capabilities {
    title:               string;
    cdn_propagation:     string;
    domain_aliases:      boolean;
    secure_site:         boolean;
    sso_secure_site:     boolean;
    secure_site_context: boolean;
    prerendering:        boolean;
    proxying:            boolean;
    ssl:                 string;
    rate_cents:          number;
    yearly_rate_cents:   number;
    ipv6_domain:         string;
    branch_deploy:       boolean;
    managed_dns:         boolean;
    geo_ip:              boolean;
    split_testing:       boolean;
    id:                  string;
    cdn_tier:            string;
}

export interface FunctionsEnv {
}

export interface ProcessingSettings {
    html:              HTML;
    ignore_html_forms: boolean;
}

export interface HTML {
    pretty_urls: boolean;
}

export interface PublishedDeploy {
    id:                         string;
    site_id:                    string;
    build_id:                   string;
    state:                      string;
    name:                       string;
    url:                        string;
    ssl_url:                    string;
    admin_url:                  string;
    deploy_url:                 string;
    deploy_ssl_url:             string;
    created_at:                 Date;
    updated_at:                 Date;
    user_id:                    string;
    error_message:              null;
    required:                   any[];
    required_functions:         any[];
    commit_ref:                 string;
    review_id:                  null;
    branch:                     string;
    commit_url:                 string;
    skipped:                    null;
    locked:                     null;
    log_access_attributes:      LogAccessAttributes;
    title:                      string;
    commit_message:             null;
    review_url:                 null;
    published_at:               Date;
    context:                    string;
    deploy_time:                number;
    available_functions:        any[];
    screenshot_url:             string;
    site_capabilities:          Capabilities;
    committer:                  string;
    skipped_log:                null;
    manual_deploy:              boolean;
    file_tracking_optimization: boolean;
    plugin_state:               string;
    lighthouse_plugin_scores:   null;
    links:                      Links;
    framework:                  string;
    entry_path:                 null;
    views_count:                null;
    function_schedules:         any[];
    public_repo:                boolean;
    pending_review_reason:      null;
    lighthouse:                 null;
    edge_functions_present:     null;
    expires_at:                 null;
}

export interface Links {
    permalink: string;
    alias:     string;
    branch:    null;
}

export interface LogAccessAttributes {
    type:     string;
    url:      string;
    database: string;
    endpoint: string;
    path:     string;
    token:    string;
}

export interface Versions {
    node: Go;
    go:   Go;
    ruby: Go;
    yarn: Go;
}

export interface Go {
    active:  string;
    default: string;
}