const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSEArticleSchema = new Schema({
    //articleName: { type: String, unique: true },

    system: { type: String },
    eligible: { type: Boolean, default: false },
    harvestDate: { type: Date, default: Date.now },


    // General Article Information
    refId: { type: String },
    updateDate: { type: Date },
    liveDate: { type: Date },
    referenceType: { type: String },
    documentType: { type: String },
    questionType: { type: String },
    title: { type: String },
    authors: { type: [String] },
    authorEmail: { type: String },
    publishedDate: { type: Date },
    citationEnglish: { type: [String] },
    citationFrench: { type: [String] },
    keywords: { type: [String] },
    customKeywords: { type: [String] },
    journalEdition: { type: String },
    volume: { type: String },
    issue: { type: String },
    startPage: { type: String },
    endPage: { type: String },
    editors: { type: String },
    publishedPlace: { type: String },
    publisher: { type: String }, 
    abstract: { type: String },
    uniqueIdDOI: { type: String },
    amstar: { type: String },
    amstartScore: { type: String },
    amstartScoreTotal: { type: String },
    meshTerms: { type: [String] },
    lastYearLitSearch: { type: Date },
    cochrane: { type: Boolean, default: false },
    cochraneIssueDate: { type: Date },
    epocReview: { type: Boolean, default: false },
    general: { type: Boolean, default: false },
    hotDocs: { type: Boolean, default: false },

    // Temporary
    priority: { type: String },
    articleSource: { type: String },
    language: { type: String },
    
    _eligibilityFiltersJuniorEmail: { type: String, default: null },
    _eligibilityFiltersSeniorEmail: { type: String, default: null },

    /// Eligibility and Filter Input
    _eligibilityFiltersJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _eligibilityFiltersJuniorEmail: { type: String, default: null },

    _eligibilityFiltersSenior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _eligibilityFiltersSeniorEmail: { type: String, default: null },

    eligibilityFiltersJuniorInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleEligibilityFilters', default: null },
    eligibilityFiltersSeniorInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleEligibilityFilters', default: null },


    // Quality Appraisals Input
    _qualityAppraisalsJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _qualityAppraisalsJuniorEmail: { type: String, default: null },

    _qualityAppraisalsSenior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _qualityAppraisalsSeniorEmail: { type: String, default: null },

    qualityAppraisalsJuniorInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleQualityAppraisals', default: null },
    qualityAppraisalsSeniorInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleQualityAppraisals', default: null },

    // Linking Studies Input
    _linkingStudiesJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _linkingStudiesJuniorEmail: { type: String, default: null },

    linkingStudiesJuniorInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleLinkingStudies', default: null },
    
    // Presentation Details Input
    _presentationDetailsJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _presentationDetailsJuniorEmail: { type: String, default: null },

    presentationDetailsJuniorInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleLinkingStudies', default: null },


    // Final inputs for articles
    eligibilityFiltersFinalInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleEligibilityFilters', default: null },
    qualityAppraisalsFinalInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleQualityAppraisals', default: null },
    linkingStudiesFinalInput: { type: Schema.Types.ObjectId, ref: 'SSEArticleLinkingStudies', default: null },
    presentationDetailsFinalInput: { type: Schema.Types.ObjectId, ref: 'SSEArticlePresentationDetails', default: null },
    

    // Junior and Senior Input Completed
    eligibilityFiltersJuniorCompleted: { type: Boolean, default: false },
    eligibilityFiltersSeniorCompleted: { type: Boolean, default: false },

    qualityAppraisalsJuniorCompleted: { type: Boolean, default: false },
    qualityAppraisalsSeniorCompleted: { type: Boolean, default: false },

    linkingStudiesJuniorCompleted: { type: Boolean, default: false },

    qualityAppraisalsJuniorCompleted: { type: Boolean, default: false },

    // Set to true if an article needs to be resolved
    eligibilityFiltersResolve: { type: Boolean, default: false },
    qualityAppraisalsResolve: { type: Boolean, default: false },

    // Set to true if Eligibility and Filter state is complete
    eligibilityFiltersFullCompletion: { type: Boolean, default: false },

    // Set to true if Quality Appraisals state is complete
    qualityAppraisalsFullCompletion: { type: Boolean, default: false },

    // Set to true if Linking Studies state is complete
    linkingStudiesFullCompletion: { type: Boolean, default: false },

    // Set to true if Quality Appraisals state is complete
    presentationDetailsFullCompletion: { type: Boolean, default: false },

    // Complicated tag
    complicated: { type: Boolean, default: false },


});

mongoose.model('SSEArticles', SSEArticleSchema);