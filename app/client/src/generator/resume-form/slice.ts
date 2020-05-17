import { reducer as reduxFormReducer } from 'redux-form'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormState } from './types'
import {
  defaultFormValues,
  emptySchool,
  emptyJob,
  emptySkill,
  emptyProject,
  emptyAward
} from './values'

type ResumeFormState = FormState['resume']

const initialState: ResumeFormState = {
  values: defaultFormValues,
  registeredFields: []
}

const formSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    addSchool(state: ResumeFormState, action: PayloadAction) {
      state.values.education.push(emptySchool)
    },
    removeSchool(state: ResumeFormState, action: PayloadAction<number>) {
      const indexToRemove = action.payload
      state.values.education.splice(indexToRemove, 1)
    },
    addJob(state: ResumeFormState, action: PayloadAction) {
      state.values.work.push(emptyJob)
    },
    removeJob(state: ResumeFormState, action: PayloadAction<number>) {
      const indexToRemove = action.payload
      state.values.work.splice(indexToRemove, 1)
    },
    addJobHighlight(state: ResumeFormState, action: PayloadAction<number>) {
      const jobIndex = action.payload
      state.values.work[jobIndex].highlights.push('')
    },
    removeJobHighlight(
      state: ResumeFormState,
      action: PayloadAction<{ jobIndex: number; highlightIndex: number }>
    ) {
      const { jobIndex, highlightIndex } = action.payload
      state.values.work[jobIndex].highlights.splice(highlightIndex, 1)
    },
    addSkill(state: ResumeFormState, action: PayloadAction) {
      state.values.skills.push(emptySkill)
    },
    removeSkill(state: ResumeFormState, action: PayloadAction<number>) {
      const indexToRemove = action.payload
      state.values.skills.splice(indexToRemove, 1)
    },
    addSkillKeyword(state: ResumeFormState, action: PayloadAction<number>) {
      const jobIndex = action.payload
      state.values.skills[jobIndex].keywords.push('')
    },
    removeSkillKeyword(
      state: ResumeFormState,
      action: PayloadAction<{ skillIndex: number; keywordIndex: number }>
    ) {
      const { skillIndex, keywordIndex } = action.payload
      state.values.skills[skillIndex].keywords.splice(keywordIndex, 1)
    },
    addProject(state: ResumeFormState, action: PayloadAction) {
      state.values.projects.push(emptyProject)
    },
    removeProject(state: ResumeFormState, action: PayloadAction<number>) {
      const indexToRemove = action.payload
      state.values.projects.splice(indexToRemove, 1)
    },
    addProjectKeyword(state: ResumeFormState, action: PayloadAction<number>) {
      const jobIndex = action.payload
      state.values.projects[jobIndex].keywords.push('')
    },
    removeProjectKeyword(
      state: ResumeFormState,
      action: PayloadAction<{ projectIndex: number; keywordIndex: number }>
    ) {
      const { projectIndex, keywordIndex } = action.payload
      state.values.projects[projectIndex].keywords.splice(keywordIndex, 1)
    },
    addAward(state: ResumeFormState, action: PayloadAction) {
      state.values.awards.push(emptyAward)
    },
    removeAward(state: ResumeFormState, action: PayloadAction<number>) {
      const indexToRemove = action.payload
      state.values.awards.splice(indexToRemove, 1)
    }
  }
})

export const formActions = formSlice.actions

export const formReducer = reduxFormReducer.plugin({
  resume: formSlice.reducer
})