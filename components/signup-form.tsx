'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SignUp, SingUpResponse } from "@/types/users"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HandlePostCall } from "@/utils/handleApiCall"
export default function SignupFormComponent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [university, setUniversity] = useState("")
  const [isPasswordMatch, setIsPasswordMatch] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isPasswordMatch) {
      const signUpForm: SignUp = {
        email: email, 
        password: password, 
        university: university 
      }
      console.log("SENT"); 
      const SignUpAction: SingUpResponse = await HandlePostCall<SingUpResponse>({route: 'register/signup', body:signUpForm})
      console.log(SignUpAction); 
    } 
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
    setIsPasswordMatch(e.target.value === password)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-900 rounded-3xl shadow-2xl">
      <div className="bg-gray-800 p-6 rounded-2xl">
        <div className="flex flex-col items-center gap-6">

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Create An Account</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                autoComplete="username"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                autoComplete="new-password"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className={`block text-sm font-medium mb-1 ${isPasswordMatch ? 'text-gray-300' : 'text-red-500'}`}
              >
                Confirm Password
                {!isPasswordMatch && (
                  <span style={{ fontStyle: 'italic', color: 'red' }}>
                    {' - Passwords don\'t match'}
                  </span>
                )}
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                className={`w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500 ${!isPasswordMatch ? 'border-red-500' : ''}`}
                autoComplete="new-password"
              />
            </div>
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-300 mb-1">
                University
              </label>
              <Select value={university} onValueChange={setUniversity}>
                <SelectTrigger className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500">
                  <SelectValue placeholder="Select a university" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-white border-gray-600">
                  <SelectItem value="university-of-guelph">University of Guelph</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>
          </form>
          <div className="text-center">
            <Button variant="link" className="text-blue-400 hover:text-blue-300">
              Already have an account? Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
